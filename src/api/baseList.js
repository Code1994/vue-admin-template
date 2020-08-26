// 存放基础api 如下拉列表等

import axios from '@/utils/http'

export default {
  getCommissionStatusList(params = {}, headers = {}) {
    return axios.get('/api/cst/rakeback/rakeBackStatus', params, headers)
  }
}
