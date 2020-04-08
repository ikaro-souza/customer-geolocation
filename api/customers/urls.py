from rest_framework.routers import SimpleRouter

from .views import CustomerViewSet

router = SimpleRouter()
router.register('', CustomerViewSet)

app_name = 'customers'
urlpatterns = router.urls
