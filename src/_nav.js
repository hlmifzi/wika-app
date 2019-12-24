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
      "name": "Users Management",
      "url": "/dataMaster/userManagement",
      "icon": "icon-user"
    },
    {
      "name": "Tenants Management",
      "url": "/dataMaster/tenantManagement",
      "icon": "icon-screen-desktop"
    },
    {
      "title": true,
      "name": "Product Management",
      "wrapper": {
        "element": "",
        "attributes": {}
      }
    },
    {
      "name": "List Product",
      "url": "/productManagement/ListProduct",
      "icon": "icon-list"
    },
    {
      "name": "Manage All Product",
      "url": "/productManagement/ManageProduct",
      "icon": "icon-layers"
    },
    {
      "title": true,
      "name": "Product Management",
      "wrapper": {
        "element": "",
        "attributes": {}
      }
    },
    {
      "name": "List Product",
      "url": "/productManagement/ListProduct",
      "icon": "icon-list"
    },
    {
      "name": "Transaction",
      "url": "/Transaction",
      "icon": "icon-cursor",
      "children": [
        {
          "name": "Entry",
          "url": "/productManagement/Entry",
          "icon": "icon-action-redo"
        },
        {
          "name": "Depreciation",
          "url": "/productManagement/Depreciation",
          "icon": "icon-arrow-down"
        },
        {
          "name": "Retur",
          "url": "/productManagement/Retur",
          "icon": "icon-action-undo"
        },
        {
          "name": "Selling",
          "url": "/productManagement/Selling",
          "icon": "icon-basket"
        }
      ]
    },
    {
      "name": "Product Report",
      "url": "/pages",
      "icon": "icon-book-open",
      "children": [
        {
          "name": "Entry",
          "url": "/report/Entry",
          "icon": "icon-action-redo"
        },
        {
          "name": "Depreciation",
          "url": "/report/Depreciation",
          "icon": "icon-arrow-down"
        },
        {
          "name": "Retur",
          "url": "/report/Retur",
          "icon": "icon-action-undo"
        },
        {
          "name": "Selling",
          "url": "/report/Selling",
          "icon": "icon-basket"
        }
      ]
    }
  ]
};

export default menuAdmin
