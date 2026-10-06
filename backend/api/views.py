from django.shortcuts import render
from rest_framework import viewsets
from .models import SocialLink, Project
from .serializers import SocialLinkSerializer, ProjectSerializer

# Create your views here.
class SocialLinkViewSet(viewsets.ModelViewSet):
    queryset = SocialLink.objects.all()
    serializer_class = SocialLinkSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
