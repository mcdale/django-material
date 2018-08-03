from django.db import models
from modelcluster.fields import ParentalKey
from modelcluster.models import ClusterableModel

from wagtail.admin.edit_handlers import (
    FieldPanel,
    FieldRowPanel,
    InlinePanel,
    MultiFieldPanel,
    PageChooserPanel,
    StreamFieldPanel,
)
from wagtail.core.fields import RichTextField, StreamField
from wagtail.core.models import Collection, Page
from wagtail.contrib.forms.models import AbstractEmailForm, AbstractFormField
from wagtail.images.edit_handlers import ImageChooserPanel
from wagtail.search import index
from wagtail.snippets.models import register_snippet

# Create your models here.
@register_snippet
class People(index.Indexed, ClusterableModel):
    """
    A Django model to store People objects.
    It uses the `@register_snippet` decorator to allow it to be accessible
    via the Snippets UI (e.g. /admin/snippets/base/people/)
    `People` uses the `ClusterableModel`, which allows the relationship with
    another model to be stored locally to the 'parent' model (e.g. a PageModel)
    until the parent is explicitly saved. This allows the editor to use the
    'Preview' button, to preview the content, without saving the relationships
    to the database.
    https://github.com/wagtail/django-modelcluster
    """
    first_name = models.CharField("First name", max_length=254)
    last_name = models.CharField("Last name", max_length=254)
    job_title = models.CharField("Job title", max_length=254)

    image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )

    panels = [
        MultiFieldPanel([
            FieldRowPanel([
                FieldPanel('first_name', classname="col6"),
                FieldPanel('last_name', classname="col6"),
            ])
        ], "Name"),
        FieldPanel('job_title'),
        ImageChooserPanel('image')
    ]

    search_fields = [
        index.SearchField('first_name'),
        index.SearchField('last_name'),
    ]

    @property
    def thumb_image(self):
        # Returns an empty string if there is no profile pic or the rendition
        # file can't be found.
        try:
            return self.image.get_rendition('fill-50x50').img_tag()
        except:
            return ''

    def __str__(self):
        return '{} {}'.format(self.first_name, self.last_name)

    class Meta:
        verbose_name = 'Person'
        verbose_name_plural = 'People'


class KnowledgeArea(models.Model):
    chapter_number = models.CharField("Chapter number", max_length=5)
    chapter_title = models.CharField("Chapter title", max_length=100)

    def __str__(self):
        return '{} {}'.format(self.chapter_number, self.chapter_title)

    class Meta:
        verbose_name = 'Knowledge Area'
        verbose_name_plural = 'Knowledge Areas'


class KnowledgeAreaIndexPage(Page):
    """
    A Page model that creates an index page (a listview)
    """
    image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+',
        help_text='Landscape mode only; horizontal width between 1000px and 3000px.'
    )

    introduction = models.TextField(
        help_text='Text to describe the page',
        blank=True)

    knowledge_area = models.ForeignKey(
        'KnowledgeArea',
        null=True,
        on_delete=models.SET_NULL,
        related_name='+',
        help_text='Select a PMI knowledge area')

    # Only LocationPage objects can be added underneath this index page
    subpage_types = ['KnowledgeAreaPage']

    # Allows children of this indexpage to be accessible via the indexpage
    # object on templates. We use this on the homepage to show featured
    # sections of the site and their child pages
    def children(self):
        return self.get_children().specific().live()

    # Overrides the context to list all child
    # items, that are live, by the date that they were published
    # http://docs.wagtail.io/en/latest/getting_started/tutorial.html#overriding-context
    def get_context(self, request):
        context = super(KnowledgeAreaIndexPage, self).get_context(request)
        context['articles'] = KnowledgeAreaPage.objects.descendant_of(
            self).live().order_by(
            'title')
        return context

    content_panels = Page.content_panels + [
        FieldPanel('knowledge_area', classname="full"),
        FieldPanel('introduction', classname="full"),
        ImageChooserPanel('image'),
    ]

    def __str__(self):
        return '{}'.format(self.knowledge_area)


class KnowledgeAreaPage(Page):
    abstract = models.TextField(
        help_text='Text to describe the article',
        blank=True)

    content_panels = Page.content_panels + [
        FieldPanel('abstract', classname="full"),
    ]

    parent_page_types = ['KnowledgeAreaIndexPage']
