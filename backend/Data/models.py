from django.db import models

class Posts(models.Model):
    post = models.TextField(max_length=50)
    author = models.CharField(max_length=50, default='')