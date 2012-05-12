from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User)
    sex = models.CharField(max_length=1, choices=[('M', 'Male'), ('F', 'Female')])
    height = models.FloatField()
#    dob = models.DateTimeField()
    
    @staticmethod
    def feet2inches(feet, inches):
        return (feet + inches * 12)

class Weight(models.Model):
    user = models.ForeignKey(User, to_field='username')
    timestamp = models.DateTimeField()
    weight = models.FloatField()
    
class BloodPressure(models.Model):
    user = models.ForeignKey(User, to_field='username')
    timestamp = models.DateTimeField()
    systolic = models.PositiveIntegerField()
    diastolic = models.PositiveIntegerField()
