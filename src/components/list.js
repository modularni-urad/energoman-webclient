import Actions from './actions.js'

export default {
  props: ['query', 'cfg'],
  components: { Actions },
  template: `
  <ACListView :query="query" :cfg="cfg">
    <template v-slot:tbody="{ items, fields }">

      <tr v-for="row,rowidx in items" :key="rowidx">
        <td>{{ row.id }}</td>
        <td>{{ row.ico }}</td>
        <td>{{ row.desc }}</td>
        <td>{{ row.buildingid }}</td>
        <td>{{ row.sensor_type }}</td>
        <td>{{ row.sensor_id }}</td>
        <td>{{ row.device_id }}</td>
        <td>{{ row.external_id }}</td>
        <td>{{ row.note }}</td>
        <Actions key="actions" :query="query" :row="row" :cfg="cfg" />
      </tr>

    </template>
  </ACListView>
  `
}
