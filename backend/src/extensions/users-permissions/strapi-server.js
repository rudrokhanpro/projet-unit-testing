const bcrypt = require("bcryptjs");
const hashPassword = async (password) => await bcrypt.hash(password, 10);

// const formatError = (error) => [
//   { messages: [{ id: error.id, message: error.message, field: error.field }] },
// ];

async function resetPassword(ctx) {
  const params = ctx.request.body;

  console.log(params);

  // Get User based on identifier
  const user = ctx.state.user;

  console.log(user);

  // Generate new hash password
  const password = await hashPassword(params.password);

  // Update user password
  await strapi.query("plugin::users-permissions.user").update({
    data: { resetPasswordToken: null, password },
    where: { id: user.id },
  });

  // Return new jwt token
  ctx.send({
    jwt: strapi.plugins["users-permissions"].services.jwt.issue({
      id: user.id,
    }),
    user: { ...user, password },
  });
}

module.exports = (plugin) => {
  plugin.controllers.auth.resetPassword = resetPassword;

  return plugin;
};
