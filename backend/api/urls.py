from rest_framework.routers import DefaultRouter
from .views import SocialLinkViewSet, ProjectViewSet

router = DefaultRouter()
router.register("sociallinks", SocialLinkViewSet)
router.register("projects", ProjectViewSet)

urlpatterns = router.urls