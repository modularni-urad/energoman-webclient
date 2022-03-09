export const CONSPOINT_FORM_CONFIG = [{
  name: 'id',
  label: "#",
  fieldcomponent: true
}, {
    name: "ico",
    component: "dyn-input",
    label: "IČO vlastníka",
    fieldcomponent: true,
    sortable: true
  },
  {
    name: "buildingid",
    component: "dyn-input",
    label: "id budovy",
    fieldcomponent: true
  },
  {
    name: "sensor_sn",
    component: "dyn-input",
    label: "výrobní číslo senzoru"
  },
  {
    name: "sensor_type",
    component: "dyn-input",
    label: "typ senzoru",
    fieldcomponent: true,
    sortable: true
  },
  {
    name: "sensor_id",
    component: "dyn-input",
    label: "ID sensoru v IOT systemu",
    fieldcomponent: true
  },
  {
    name: "distributor_id",
    component: "dyn-input",
    label: "číslo odběrného místa"
  },
  {
    name: "device_id",
    component: "dyn-input",
    label: "číslo produktomeru",
    rules: "required",
    fieldcomponent: true
  },
  {
    name: "external_id",
    component: "dyn-input",
    label: "identifikátor pro volné užití ke spárování",
    fieldcomponent: true
  },
  {
    name: "desc",
    component: "dyn-input",
    label: "popis"
  },
  {
    name: "settings",
    component: "dyn-input",
    label: "nastavení",
    rules: "required"
  },
  {
    name: "position",
    component: "dyn-input",
    label: "pozice"
  },
  {
    name: "alt",
    component: "dyn-input",
    label: "nadmořká výška"
  }
]

export const OPTION_FORM_CONFIG = [{
  name: 'title',
  component: "dyn-input",
  label: "titulek",
  rules: "required",
  fieldcomponent: true, sortable: true
}, {
  name: 'image',
  component: "dyn-input",
  label: "obrázek"
}, {
  name: 'link',
  component: "dyn-input",
  label: "odkaz",
  fieldcomponent: true
}, {
  name: 'desc',
  component: "dyn-textarea",
  label: "popis",
  fieldcomponent: true
}]