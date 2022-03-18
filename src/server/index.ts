import {app} from './app';
import {natsWrapper} from '@adidastest-phillip/common';

const PORT = process.env.PORT || 8000;

async function startApp() {
  // added using k8s command and managed by service-depl.yaml
  // if (!process.env.SECRET_KEY) {
  //   throw new Error('SECRET_KEY must be defined');
  // }
  // if (!process.env.NATS_CLIENT_ID) {
  //   throw new Error('NATS_CLIENT_ID must be defined');
  // }
  // if (!process.env.NATS_URL) {
  //   throw new Error('NATS_URL must be defined');
  // }
  // if (!process.env.NATS_CLUSTER_ID) {
  //   throw new Error('NATS_CLUSTER_ID must be defined');
  // }

  // await natsWrapper.connectNatsListener(
  //   process.env.NATS_CLUSTER_ID,
  //   process.env.NATS_CLIENT_ID,
  //   process.env.NATS_URL
  // );

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
};

startApp();
