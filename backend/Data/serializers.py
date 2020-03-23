from . import models
from rest_framework import serializers

class PostsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Posts
        fields = 'post, author'


class LoginSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Login
        fields = '__all__'


class RegisterSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Register
        fields = '__all__'
