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
# Django settings for BodyStatsServer project.
import os
BASEDIR = os.path.realpath(os.curdir) + os.path.sep
DEBUG = True
ADMINS = (
    # ('Your Name', 'your_email@example.com'),
)
MANAGERS = ADMINS
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3', # Add 'postgresql_psycopg2', 'mysql', 'sqlite3' or 'oracle'.
        'NAME': 'BodyStats.db', # Or path to database file if using sqlite3.
        'USER': '', 'PASSWORD': '', 'HOST': '', 'PORT': '',
    }
}
TIME_ZONE = 'America/Los_Angeles'
LANGUAGE_CODE = 'en-us'
SITE_ID = 1
USE_I18N = True
USE_L10N = True
USE_TZ = True
MEDIA_ROOT = ''
MEDIA_URL = ''
STATIC_ROOT = BASEDIR + 'deploy-static/'
STATIC_URL = '/static/'
STATICFILES_DIRS = ('/home/justin/src/BodyStats/',)
STATICFILES_FINDERS = (
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
#    'django.contrib.staticfiles.finders.DefaultStorageFinder',
)
SECRET_KEY = 'd8!31%5y&amp;=4$d=j==#4sezb8_(*8ju#8(!0ocke043lx+a671@'
MIDDLEWARE_CLASSES = (
    # 'django.middleware.cache.UpdateCacheMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    # 'django.middleware.clickjacking.XFrameOptionsMiddleware',
    # 'django.middleware.cache.FetchFromCacheMiddleware',
)
ROOT_URLCONF = 'django_bodystats.urls'
WSGI_APPLICATION = 'django_bodystats.wsgi.application'
TEMPLATE_CONTEXT_PROCESSORS = (
    'django.core.context_processors.debug',
    'django.core.context_processors.i18n',
    'django.core.context_processors.media',
    'django.core.context_processors.static',
    'django.core.context_processors.request',
    'django.contrib.messages.context_processors.messages',
    'django.contrib.auth.context_processors.auth',
#    "allauth.context_processors.allauth",
#    "allauth.account.context_processors.account",
)
TEMPLATE_DEBUG = DEBUG
TEMPLATE_DIRS = ()
TEMPLATE_LOADERS = (
    'django.template.loaders.filesystem.Loader',
    'django.template.loaders.app_directories.Loader',
#     'django.template.loaders.eggs.Loader',
)
FIXTURES = (BASEDIR + 'fixtures/',)
INSTALLED_APPS = (
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.sites',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.admin',
    'django.contrib.admindocs',
    'tastypie',
    #'avatar',
    #'emailconfirmation',
    #'uni_form',
    #'allauth',
    #'allauth.account',
    #'allauth.socialaccount',
    #'allauth.twitter',
    #'allauth.openid',
    #'allauth.facebook',
    'BodyStats'
)
SESSION_ENGINE = "django.contrib.sessions.backends.cached_db"
AUTH_PROFILE_MODULE = 'BodyStats.UserProfile'
#AUTHENTICATION_BACKENDS = ("allauth.account.auth_backends.AuthenticationBackend",)
#ACCOUNT_EMAIL_REQUIRED = True
#ACCOUNT_EMAIL_VERIFICATION = True
#ACCOUNT_EMAIL_AUTHENTICATION = True
#ACCOUNT_EMAIL_SUBJECT_PREFIX = "BodyStats "
#    A string pointing to a custom form class e.g. 'myapp.forms.SignupForm' that is used during signup to ask the user for additional input e.g. newsletter signup, birth date. This class should implement a 'save' method, accepting the newly signed up user as its only parameter.
#ACCOUNT_SIGNUP_FORM_CLASS = None
#    When signing up, let the user type in his password twice to avoid typ-o's.
#ACCOUNT_SIGNUP_PASSWORD_VERIFICATION = True
#    Enforce uniqueness of e-mail addresses.
#ACCOUNT_UNIQUE_EMAIL = True
#    If false, generates a random username rather than prompting for one at signup.
#ACCOUNT_USERNAME_REQUIRED = True
#    render_value parameter as passed to PasswordInput fields.
#ACCOUNT_PASSWORD_INPUT_RENDER_VALUE = False
#    Request e-mail address from 3rd party account provider? E.g. using OpenID AX, or the Facebook "email" permission.
#SOCIALACCOUNT_QUERY_EMAIL = ACCOUNT_EMAIL_REQUIRED
#    Attempt to bypass the signup form by using fields e.g. username, email retrieved from the social account provider. If a conflict arises due to a duplicate e-mail address the signup form will still kick in.
#SOCIALACCOUNT_AUTO_SIGNUP = True
#    Enable support for django-avatar. When enabled, the profile image of the user is copied locally into django-avatar at signup.
#SOCIALACCOUNT_AVATAR_SUPPORT = 'avatar' in INSTALLED_APPS
#    Determines the expiration date of email confirmation mails sent by django-email-confirmation. 
#EMAIL_CONFIRMATION_DAYS = 7
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'verbose': {
            'format': '%(levelname)s %(asctime)s %(module)s %(process)d %(thread)d %(message)s'
        },
        'simple': {
            'format': '%(levelname)s %(message)s'
        },
    },
    'filters': {
        'require_debug_false': {
            '()': 'django.utils.log.RequireDebugFalse'
        }
    },
    'handlers': {
        'mail_admins': {
            'level': 'ERROR',
            'filters': ['require_debug_false'],
            'class': 'django.utils.log.AdminEmailHandler'
        },
    },
    'loggers': {
        'django.request': {
            'handlers': ['mail_admins'],
            'level': 'ERROR',
            'propagate': True,
        },
    }
}
