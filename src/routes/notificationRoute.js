import { NotificationController } from '../controllers';

const notificationRoute = app => {
  app.get(
    '/api/v1/managerNotification/:id',
    NotificationController.notifyManager
  );
  app.get(
    '/api/v1/userNotification/:id',
    NotificationController.notifyUser
  );
};

export default notificationRoute;
