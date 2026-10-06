from rest_framework import serializers
from .models import SocialLink, Project

class SocialLinkSerializer(serializers.ModelSerializer):
    class Meta: 
        model = SocialLink
        fields = "__all__"

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = "__all__"