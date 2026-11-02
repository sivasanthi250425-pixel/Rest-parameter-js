function setpermission(permissionlevel,...names){
    names.map(name=>console.log(`${name} has been set to ${permissionlevel} permission level`));
}
setpermission('admin','Arjun','Will');