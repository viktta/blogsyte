
from django.db import models


class Posts(models.Model):
    post = models.TextField()
    author = models.CharField(max_length=50, default='')

class Login(models.Model):
    user = models.TextField()
    email = models.EmailField(max_length=100, unique=True)
    password = models.TextField()

class Register(models.Model):
    user = models.TextField()
    email = models.TextField()
    password = models.TextField()