module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a5604e48423d11b6baf18b463f9b3e19'),
  },
});
