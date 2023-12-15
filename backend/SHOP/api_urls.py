from django.urls import re_path
from rest_framework import routers

from products.api.views import ProductViewSet

app_name = 'api'

router = routers.DefaultRouter()

router.register(r'products', ProductViewSet)

urlpatterns = router.urls
