from .models import *
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import *


class PostsViewSet(viewsets.ModelViewSet):
    """
        API endpoint that allows users to be viewed or edited.
    """
    queryset = Posts.objects.all()
    serializer_class = PostsSerializer
    permission_classes = [permissions.IsAuthenticated]
