'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  notification.classList.add('notification', `${type}`);

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  const notificationTitle = document.createElement('h2');
  notificationTitle.classList.add('title');
  notificationTitle.textContent = `${title}`;

  const notificationText = document.createElement('p');
  notificationText.textContent = `${description}`;

  notification.appendChild(notificationTitle);
  notification.appendChild(notificationText);

  document.body.appendChild(notification);

  //  setTimeout(() => {
  //    notification.remove();
  // }, 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);

// console.log(getComputedStyle(document.body).width);
function removeNotifications() {
  document.querySelectorAll('.notification').forEach((n, i) => {
    setTimeout(
      () => {
        n.classList.remove('notification--visible');
      },
      1200 * (i + 1),
    );

    setTimeout(
      () => {
        n.remove();
      },
      (1800 + 1000) * (i + 1),
    );
  });
}

function showNotifications() {
  document.querySelectorAll('.notification').forEach((n, i) => {
    setTimeout(
      () => {
        n.classList.add('notification--visible');
      },
      500 * (i + 1),
    );
  });
}

showNotifications();

setTimeout(removeNotifications, 2000);
