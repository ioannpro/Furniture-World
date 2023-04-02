from django.urls import path

from .views import *

urlpatterns = [
    path('', main_page, name="main"),
    path('product/', product_page), # Не доделал вызов
]