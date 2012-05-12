from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User)
    sex = models.CharField(blank=True, max_length=1, choices=[('M', 'Male'), ('F', 'Female')])
    height = models.FloatField(blank=True)
#    dob = models.DateTimeField()
    
    def __unicode__(self):
        return("%s\n\tSex: %s\n\tHeight: %02.1f" % 
               (str(self.user), self.sex, self.height))

class Weight(models.Model):
    user = models.ForeignKey(User, to_field='username')
    timestamp = models.DateTimeField()
    weight = models.FloatField()
    
    def __unicode__(self):
        return("%s\n\tTimestamp: %s\n\tWeight: %03.1f" % 
               (str(self.user), str(self.timestamp), self.weight))

class BloodPressure(models.Model):
    user = models.ForeignKey(User, to_field='username')
    timestamp = models.DateTimeField()
    systolic = models.PositiveIntegerField()
    diastolic = models.PositiveIntegerField()

    def __unicode__(self):
        return("%s\n\tTimestamp: %s\n\tBloodpressure: %03d/%03d" % 
               (str(self.user), str(self.timestamp), self.systolic, self.diastolic))

#def create_user_profile(sender, instance, created, **kwargs):
#    if created:
#        UserProfile.objects.create(user=instance)
#
#models.signals.post_save.connect(create_user_profile, sender=User)

