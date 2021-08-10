// create specific roles and defining permissions for accessing resources

const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function() {
    ac.grant("guest")
    .readOwn("profile")
    .updateOwn("profile")

    ac.grant("staff")
    .extend("guest")
    .readAny("profile")

    ac.grant("superadmin")
    .extend("guest")
    .extend("staff")
    .updateAny("profile")
    .deleteAny("profile")

    return ac;
})();
