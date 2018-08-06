from wagtail.contrib.modeladmin.options import (
    ModelAdmin, ModelAdminGroup, modeladmin_register)

from .models import (KnowledgeArea, ProcessGroup, Process)


class ProcessGroupAdmin(ModelAdmin):
    model = ProcessGroup


class KnowledgeAreaAdmin(ModelAdmin):
    model = KnowledgeArea


class ProcessAdmin(ModelAdmin):
    model = Process


class DisciplineModelAdminGroup(ModelAdminGroup):
    menu_label = 'Background'
    menu_icon = 'fa-cutlery'  # change as required
    menu_order = 800  # will put in 4th place (000 being 1st, 100 2nd)
    items = (KnowledgeAreaAdmin,ProcessGroupAdmin,ProcessAdmin)

# class ExecutionModelAdminGroup(ModelAdminGroup):
#     menu_label = 'Project Background'
#     menu_icon = 'fa-cutlery'  # change as required
#     menu_order = 400  # will put in 4th place (000 being 1st, 100 2nd)
#     items = ()

# When using a ModelAdminGroup class to group several ModelAdmin classes together,
# you only need to register the ModelAdminGroup class with Wagtail:
modeladmin_register(DisciplineModelAdminGroup)
# modeladmin_register(ExecutionModelAdminGroup)
