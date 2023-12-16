from django.contrib import admin
from django.urls import path, include

from products.views import AllProductsView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('SHOP.api_urls', namespace='api')),
    path('products/', AllProductsView.as_view(), name='products')
]
