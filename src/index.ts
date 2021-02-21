export type PermissionType = 'read' | 'write' | 'admin';

const checkPermission = (require: PermissionType, permission: PermissionType) => {
  /**
   * 有权限返回 true
   */
  const permissions = ['read', 'write', 'admin'];
  const requireNo = permissions.indexOf(require);
  const permissionNo = permissions.indexOf(permission);

  return requireNo <= permissionNo;
};

const dealStringToArr = (para: string) => {
  /**
   * in  'x1,x2,x3'
   * out ['x1','x2','x3']
   */
  const arr: string[] = [];
  if (para) {
    const paraArr = para.split(',');
    paraArr.forEach(it => {
      if (it.trim()) {
        arr.push(it.trim());
      }
    });
  }
  return arr;
};

export { checkPermission, dealStringToArr };
