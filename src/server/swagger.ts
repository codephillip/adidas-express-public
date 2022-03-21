const swaggerDocument = {
  swagger: '2.0',
  basePath: '/api/v1/',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  paths: {
    '/emails/': {
      get: {
        summary: 'Lists all the emails',
        tags: ['email'],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'Returns a list',
            schema: {
              $ref: '#/definitions/Email',
            },
          },
        },
      },
      post: {
        summary: 'Creates a email',
        tags: ['email'],
        parameters: [
          {
            name: 'email',
            in: 'body',
            required: true,
            schema: {
              $ref: '#/createUpdateDef/CreateUpdateEmail',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          201: {
            description: 'Returns a new email',
            schema: {
              $ref: '#/createUpdateDef/CreateUpdateEmail',
            },
          },
        },
      },
    },
    '/emails/{id}': {
      get: {
        summary: 'Gets a email by its primary key',
        tags: ['email'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'Returns a email with primary key',
            schema: {
              $ref: '#/definitions/Email',
            },
          },
        },
      },
      delete: {
        summary: 'Deletes a email by its primary key',
        tags: ['email'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
        },
      },
      put: {
        summary: 'Overrides the values of a email',
        tags: ['email'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              $ref: '#/definitions/Email',
            },
          },
          {
            name: 'email',
            in: 'body',
            required: true,
            schema: {
              $ref: '#/createUpdateDef/CreateUpdateEmail',
            },
          },
        ],
        responses: {
          200: {
            description: 'Returns a email',
            schema: {
              $ref: '#/definitions/Email',
            },
          },
        },
      },
      patch: {
        tags: ['email'],
        summary: 'patch a email',
        parameters: [
          {
            name: 'id',
            in: 'path',
            schema: {
              $ref: '#/definitions/Email',
            },
          },
          {
            name: 'email',
            in: 'body',
            schema: {
              $ref: '#/createUpdateDef/CreateUpdateEmail',
            },
          },
        ],
        responses: {
          200: {
            description: 'Returns a email and its partially overwritten values',
            schema: {
              $ref: '#/definitions/Email',
            },
          },
        },
      },
    },
    '/subscriptions/': {
      get: {
        summary: 'Lists all the subscriptions',
        tags: ['subscription'],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'Returns a list',
            schema: {
              $ref: '#/definitions/Subscription',
            },
          },
        },
      },
      post: {
        summary: 'Creates a subscription',
        tags: ['subscription'],
        parameters: [
          {
            name: 'subscription',
            in: 'body',
            required: true,
            schema: {
              $ref: '#/createUpdateDef/CreateUpdateSubscription',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          201: {
            description: 'Returns a new subscription',
            schema: {
              $ref: '#/createUpdateDef/CreateUpdateSubscription',
            },
          },
        },
      },
    },
    '/subscriptions/{id}': {
      get: {
        summary: 'Gets a subscription by its primary key',
        tags: ['subscription'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'Returns a subscription with primary key',
            schema: {
              $ref: '#/definitions/Subscription',
            },
          },
        },
      },
      delete: {
        summary: 'Deletes a subscription by its primary key',
        tags: ['subscription'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
        },
      },
      put: {
        summary: 'Overrides the values of a subscription',
        tags: ['subscription'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              $ref: '#/definitions/Subscription',
            },
          },
          {
            name: 'subscription',
            in: 'body',
            required: true,
            schema: {
              $ref: '#/createUpdateDef/CreateUpdateSubscription',
            },
          },
        ],
        responses: {
          200: {
            description: 'Returns a subscription',
            schema: {
              $ref: '#/definitions/Subscription',
            },
          },
        },
      },
      patch: {
        tags: ['subscription'],
        summary: 'patch a subscription',
        parameters: [
          {
            name: 'id',
            in: 'path',
            schema: {
              $ref: '#/definitions/Subscription',
            },
          },
          {
            name: 'subscription',
            in: 'body',
            schema: {
              $ref: '#/createUpdateDef/CreateUpdateSubscription',
            },
          },
        ],
        responses: {
          200: {
            description: 'Returns a subscription and its partially overwritten values',
            schema: {
              $ref: '#/definitions/Subscription',
            },
          },
        },
      },
    },

    '/campaigns/': {
      get: {
        summary: 'Lists all the campaigns',
        tags: ['campaign'],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'Returns a list',
            schema: {
              $ref: '#/definitions/Campaign',
            },
          },
        },
      },
      post: {
        summary: 'Creates a campaign',
        tags: ['campaign'],
        parameters: [
          {
            name: 'campaign',
            in: 'body',
            required: true,
            schema: {
              $ref: '#/createUpdateDef/CreateUpdateCampaign',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          201: {
            description: 'Returns a new campaign',
            schema: {
              $ref: '#/createUpdateDef/CreateUpdateCampaign',
            },
          },
        },
      },
    },
    '/campaigns/{id}': {
      get: {
        summary: 'Gets a campaign by its primary key',
        tags: ['campaign'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'Returns a campaign with primary key',
            schema: {
              $ref: '#/definitions/Campaign',
            },
          },
        },
      },
      delete: {
        summary: 'Deletes a campaign by its primary key',
        tags: ['campaign'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
        },
      },
      put: {
        summary: 'Overrides the values of a campaign',
        tags: ['campaign'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              $ref: '#/definitions/Campaign',
            },
          },
          {
            name: 'campaign',
            in: 'body',
            required: true,
            schema: {
              $ref: '#/createUpdateDef/CreateUpdateCampaign',
            },
          },
        ],
        responses: {
          200: {
            description: 'Returns a campaign',
            schema: {
              $ref: '#/definitions/Campaign',
            },
          },
        },
      },
      patch: {
        tags: ['campaign'],
        summary: 'patch a campaign',
        parameters: [
          {
            name: 'id',
            in: 'path',
            schema: {
              $ref: '#/definitions/Campaign',
            },
          },
          {
            name: 'campaign',
            in: 'body',
            schema: {
              $ref: '#/createUpdateDef/CreateUpdateCampaign',
            },
          },
        ],
        responses: {
          200: {
            description: 'Returns a campaign and its partially overwritten values',
            schema: {
              $ref: '#/definitions/Campaign',
            },
          },
        },
      },
    },
  },
  definitions: {
    Email: {
      required: ['emailAddress','message','subject',],
      properties: {
        id: {
          type: 'string',
          format: 'uuid',
          uniqueItems: true,
          readOnly: true,
        },
        emailAddress: {
          type: 'string',
          maxLength: 255,
        },
        emailType: {
          type: 'string',
          maxLength: 255,
          enum: ['General', 'Newsletter', 'Promotions', 'Reminder'],
        },
        message: {
          type: 'string',
          maxLength: 2000,
        },
        subject: {
          type: 'string',
          maxLength: 255,
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
      },
    },
    Subscription: {
      required: ['email', 'dob', 'consented', 'campaign'],
      properties: {
        id: {
          type: 'string',
          format: 'uuid',
          uniqueItems: true,
          readOnly: true,
        },
        email: {
          type: 'string',
          uniqueItems: true,
          maxLength: 255,
        },
        firstName: {
          type: 'string',
          maxLength: 255,
        },
        gender: {
          type: 'string',
          maxLength: 255,
          enum: ['female', 'male', 'other'],
        },
        dob: {
          type: 'string',
          format: 'date',
        },
        consented: {
          type: 'boolean',
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
        campaign: {
          type: 'string',
          format: 'uuid',
          uniqueItems: true,
        },
      },
    },

    Campaign: {
      required: [],
      properties: {
        id: {
          type: 'string',
          format: 'uuid',
          uniqueItems: true,
          readOnly: true,
        },
        name: {
          type: 'string',
          uniqueItems: true,
          maxLength: 255,
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
        subscriptions: {
          type: 'array',
          items: {
            type: 'string',
            format: 'uuid',
          },
          uniqueItems: true,
        },
      },
    },
  },
  createUpdateDef: {
    CreateUpdateEmail: {
      required: ['emailAddress','message','subject',],
      properties: {
        id: {
          type: 'string',
          format: 'uuid',
          uniqueItems: true,
          readOnly: true,
        },
        emailAddress: {
          type: 'string',
          maxLength: 255,
        },
        emailType: {
          type: 'string',
          maxLength: 255,
          enum: ['General', 'Newsletter', 'Promotions', 'Reminder'],
        },
        message: {
          type: 'string',
          maxLength: 2000,
        },
        subject: {
          type: 'string',
          maxLength: 255,
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
      },
    },
    CreateUpdateSubscription: {
      required: ['email', 'dob', 'consented', 'campaign'],
      properties: {
        id: {
          type: 'string',
          format: 'uuid',
          uniqueItems: true,
          readOnly: true,
        },
        email: {
          type: 'string',
          uniqueItems: true,
          maxLength: 255,
        },
        firstName: {
          type: 'string',
          maxLength: 255,
        },
        gender: {
          type: 'string',
          maxLength: 255,
          enum: ['female', 'male', 'other'],
        },
        dob: {
          type: 'string',
          format: 'date',
        },
        consented: {
          type: 'boolean',
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
        campaign: {
          type: 'string',
          format: 'uuid',
          uniqueItems: true,
        },
      },
    },

    CreateUpdateCampaign: {
      required: [],
      properties: {
        id: {
          type: 'string',
          format: 'uuid',
          uniqueItems: true,
          readOnly: true,
        },
        name: {
          type: 'string',
          uniqueItems: true,
          maxLength: 255,
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
      },
    },
  },
};

export default swaggerDocument;
