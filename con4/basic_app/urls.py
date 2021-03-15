from django.urls import path, include
from basic_app import views

urlpatterns = [
    path('', views.index, name='index')
]