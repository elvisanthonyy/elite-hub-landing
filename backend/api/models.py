from django.db import models

# Create your models here.
class SocialLink(models.Model):
    label = models.CharField(max_length=255)
    iconUrl = models.CharField(max_length=255)
    link = models.CharField(max_length=255)

    def __str__(self):
        return self.label

class Project(models.Model):
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    code = models.CharField(max_length=255)
    link = models.CharField(max_length=255)
    
    def __str__(self):
        return self.name