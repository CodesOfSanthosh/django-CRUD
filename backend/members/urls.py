from django.urls import path
from . import views

urlpatterns = [
    path('members/', views.member_list),
    path('members/create/', views.member_create),
    path('members/<int:pk>/update/', views.member_update),
    path('members/<int:pk>/delete/', views.member_delete),
]