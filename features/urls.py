from django.urls import path
from . import views

urlpatterns = [
    path('donate.html', views.donate, name="donate"),
    path('map.html', views.map, name="map"),
    path('points.html', views.points, name='points'),
    path('about.html', views.about, name='about'),
    path('products.html', views.products, name='products')
]