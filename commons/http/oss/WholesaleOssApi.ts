import ApiClient from 'http/ApiClient'
import OssToken from 'model/oss/OssToken.ts'
import Response from 'model/common/Response'

export default class WholesaleOssApi {
  /**
   * 获取token
   *
   * @param tenant 租户id
   */
  static fileUpload(tenant: string): Promise<Response<OssToken>> {
    return ApiClient.server()
      .post(`gpas/v1/${tenant}/wholesale/oss/getToken`, {}, {})
      .then((res) => {
        return res.data
      })
  }
}
