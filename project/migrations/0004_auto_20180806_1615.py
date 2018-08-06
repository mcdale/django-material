# Generated by Django 2.0.8 on 2018-08-06 16:15

from django.db import migrations, models
import django.db.models.deletion
import modelcluster.fields
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('project', '0003_auto_20180801_1926'),
    ]

    operations = [
        migrations.CreateModel(
            name='Process',
            fields=[
                ('identifier', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('process_name', models.CharField(max_length=100, verbose_name='Process Name')),
                ('knowledge_area', modelcluster.fields.ParentalKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='project.KnowledgeArea')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='ProcessGroup',
            fields=[
                ('identifier', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('process_group_name', models.CharField(max_length=100, verbose_name='Process Group Name')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='process',
            name='process_group',
            field=modelcluster.fields.ParentalKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='project.ProcessGroup'),
        ),
    ]