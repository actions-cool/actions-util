export type TPermissionType = 'read' | 'write' | 'admin';

export const checkPermission = (require: TPermissionType, permission: TPermissionType) => {
  /**
   * 有权限返回 true
   */
  const permissions = ['read', 'write', 'admin'];
  const requireNo = permissions.indexOf(require);
  const permissionNo = permissions.indexOf(permission);

  return requireNo <= permissionNo;
};
