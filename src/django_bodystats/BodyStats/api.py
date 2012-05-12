'''
django_bodystats
@updated: on May 11, 2012
@author: justin
@license:  AGPLv3
    Copyright (C) 2012  Justin Chudgar,
    5040 Saddlehorn Rd, Weed, CA 96094
    <justin@justinzane.com>

     is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

     is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.    
'''
from tastypie.resources import ModelResource
from tastypie.authorization import DjangoAuthorization
from tastypie.authentication import ApiKeyAuthentication, DigestAuthentication, OAuthAuthentication
from tastypie import fields
from django.contrib.auth.models import User
from models import BloodPressure, UserProfile, Weight

class UserResource(ModelResource):
    user_profile = fields.ToOneField('BodyStats.api.UserProfileResource', 'userprofile')
    class Meta:
        queryset = User.objects.all()
        fields = ['id', 'username', 'first_name', 'last_name', 'last_login', 'date_joined']
        authentication = ApiKeyAuthentication()
        authorization = DjangoAuthorization()

class UserProfileResource(ModelResource):
    user = fields.OneToOneField(UserResource, 'user')
    class Meta:
        queryset = UserProfile.objects.all()
        authentication = ApiKeyAuthentication()
        authorization = DjangoAuthorization()
        
    def obj_create(self, bundle, request=None, **kwargs):
        return super(UserProfileResource, self).obj_create(bundle, request, user=request.user)

    def apply_authorization_limits(self, request, object_list):
        return object_list.filter(user=request.user)

class WeightResource(ModelResource):
    user = fields.ForeignKey(UserResource, 'user')
    class Meta:
        queryset = Weight.objects.all()
        fields = ['user', 'timestamp', 'weight']
        authentication = ApiKeyAuthentication()
        authorization = DjangoAuthorization()
        
    def obj_create(self, bundle, request=None, **kwargs):
        return super(WeightResource, self).obj_create(bundle, request, user=request.user)

    def apply_authorization_limits(self, request, object_list):
        return object_list.filter(user=request.user)

class BloodPressureResource(ModelResource):
    user = fields.ForeignKey(UserResource, 'user')
    class Meta:
        queryset = BloodPressure.objects.all()
        fields = ['user', 'timestamp', 'systolic', 'diastolic']
        authentication = ApiKeyAuthentication()
        authorization = DjangoAuthorization()

    def obj_create(self, bundle, request=None, **kwargs):
        return super(BloodPressureResource, self).obj_create(bundle, request, user=request.user)

    def apply_authorization_limits(self, request, object_list):
        return object_list.filter(user=request.user)

