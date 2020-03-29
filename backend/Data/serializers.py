from . import models
from rest_framework import serializers


class PostsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Posts
        fields = '__all__'
