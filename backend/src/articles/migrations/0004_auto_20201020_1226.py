# Generated by Django 3.1.2 on 2020-10-20 12:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0003_article_avatar'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='likes',
            field=models.IntegerField(default=100),
        ),
        migrations.AddField(
            model_name='article',
            name='star',
            field=models.IntegerField(choices=[('1', 1), ('2', 2), ('3', 3), ('4', 4), ('5', 5)], default=2),
        ),
    ]
