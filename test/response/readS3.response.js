'use strict';

module.exports.readS3 = {
  access_key: 'AKIAIOSFODNN7EXAMPLE',
  bucket_name: 'my_bucket_name',
  created_at: '2016-05-23T19:48:33+00:00',
  deleted_at: null,
  domain: 's3.amazonaws.com',
  format: '%h %l %u %t "%r" %>s %b',
  format_version: '2',
  gzip_level: 0,
  message_type: 'classic',
  name: 'test-s3canary',
  path: null,
  period: '3600',
  placement: null,
  redundancy: null,
  response_condition: '',
  secret_key: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
  service_id: 'SU1Z0isxPaozGVKXdv0eY',
  timestamp_format: '%Y-%m-%dT%H:%M:%S.000',
  updated_at: '2016-05-23T19:48:33+00:00',
  version: '1',
};

module.exports.readS3404 = {
  msg: 'Record not found',
  detail:
    "Couldn't find syslog '{ deleted =\u003e 0000-00-00 00:00:00, name =\u003e test-s3-does-not-exist, service =\u003e SU1Z0isxPaozGVKXdv0eY, version =\u003e 1 }'",
};
