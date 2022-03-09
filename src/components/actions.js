import { ROUTE_NAMES, ADMIN_GROUP } from '../consts.js'

export default {
  props: ['query', 'cfg', 'row'],
  methods: {
    doEdit: function () {
      const query = Object.assign({}, this.query, { _detail: this.row.id })
      this.$router.replace({ query })
    },
    showData: function () {
      const query = Object.assign({}, this.query, { _data: this.row.id })
      this.$router.replace({ query })
    }
  },
  template: `
  <td>
    <b-button-group>
      <b-button size="sm" variant="primary" @click="doEdit(row)">
        <i class="fas fa-edit"></i> upravit
      </b-button>
      <b-button size="sm" variant="secondary" @click="showData()">
        <i class="fas fa-database"></i> data
      </b-button>
    </b-button-group>
  </td>
  `
}
