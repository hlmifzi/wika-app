const menuAdmin = {
  "items": [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },
    {
      "title": true,
      "name": "Data Master",
      "wrapper": {
        "element": "",
        "attributes": {}
      },
      "class": ""
    },
    {
      "name": "List Pegawai",
      "url": "/karyawan",
      "icon": "icon-user"
    },
    // {
    //   "name": "Tenants Management",
    //   "url": "/dataMaster/tenantManagement",
    //   "icon": "icon-screen-desktop"
    // },
    {
      "title": true,
      "name": "POSISI PEGAWAI",
      "wrapper": {
        "element": "",
        "attributes": {}
      }
    },
    {
      "name": "Filter Promosi Pegawai",
      "url": "/filter-pegawai",
      "icon": "icon-list"
    },
    // {
    //   "name": "Summary Pegawai",
    //   "url": "/summary-pegawai",
    //   "icon": "icon-layers"
    // },
    {
      "name": "Mutasi / Promosi",
      "url": "/Transaction",
      "icon": "icon-cursor",
      "children": [
        {
          "name": "Input Mutasi",
          "url": "/input-mutasi-rotasi-pegawai",
          "icon": "icon-action-redo"
        },
        // {
        //   "name": "Report Mutasi / Rotasi",
        //   "url": "/report-mutasi-rotasi-pegawai",
        //   "icon": "icon-book-open"
        // }
      ]
    },
    {
      "name": "PJS Orientasi",
      "url": "/pjs-orientasi",
      "icon": "icon-layers"
    },
    // {
    //   "title": true,
    //   "name": "Training Management",
    //   "wrapper": {
    //     "element": "",
    //     "attributes": {}
    //   }
    // },
    // {
    //   "name": "Ceklis Kepesertaan",
    //   "url": "/productManagement/ListProduct",
    //   "icon": "icon-list"
    // },
    // {
    //   "name": "Evaluasi Quartal",
    //   "url": "/productManagement/ListProduct",
    //   "icon": "icon-list"
    // },

    // {
    //   "title": true,
    //   "name": "File Management",
    //   "wrapper": {
    //     "element": "",
    //     "attributes": {}
    //   }
    // },
    // {
    //   "name": "File Manager",
    //   "url": "/productManagement/ListProduct",
    //   "icon": "icon-list"
    // },

    // {
    //   "title": true,
    //   "name": "Kebutuhan Pegawai",
    //   "wrapper": {
    //     "element": "",
    //     "attributes": {}
    //   }
    // },
    // {
    //   "name": "List Important File",
    //   "url": "/productManagement/ListProduct",
    //   "icon": "icon-list"
    // },

    // {
    //   "title": true,
    //   "name": "Biaya",
    //   "wrapper": {
    //     "element": "",
    //     "attributes": {}
    //   }
    // },
    // {
    //   "name": "List Important File",
    //   "url": "/productManagement/ListProduct",
    //   "icon": "icon-list"
    // },


  ]
};

export default menuAdmin
