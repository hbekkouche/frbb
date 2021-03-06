# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2016-05-24 03:41
from __future__ import unicode_literals

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('frbb', '0007_userprofile_withdrawn'),
    ]

    operations = [
        migrations.AddField(
            model_name='poem',
            name='created',
            field=models.DateTimeField(auto_now_add=True, default=datetime.datetime(2016, 5, 24, 3, 41, 34, 773855, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='userprofile',
            name='created',
            field=models.DateTimeField(auto_now_add=True, default=datetime.datetime(2016, 5, 24, 3, 41, 41, 245833, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='balance',
            field=models.IntegerField(default=5),
        ),
    ]
