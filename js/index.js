$(document).ready(function() {
  var $flowchart = $('#example');
  var $container = $flowchart.parent();
  
  var cx = $flowchart.width() / 2;
  var cy = $flowchart.height() / 2;
  
  // Panzoom initialization...
  $flowchart.panzoom();

  // Centering panzoom
  $flowchart.panzoom('pan', -cx + $container.width() / 3, -cy + $container.height() / 4);

  // Panzoom zoom handling...
  var possibleZooms = [0.5, 0.75, 1, 2, 3, 4, 5];
  var currentZoom = 2;
  $container.on('mousewheel.focal', function( e ) {
    e.preventDefault();
    var delta = e.delta || e.originalEvent.wheelDelta;
    var zoomOut = delta ? delta < 0 : e.originalEvent.deltaY > 0;
    currentZoom = Math.max(0, Math.min(possibleZooms.length - 1, (currentZoom + (zoomOut * 2 - 1))));
    a = $flowchart.flowchart('setPositionRatio', possibleZooms[currentZoom]);
    a = $flowchart.panzoom('zoom', possibleZooms[currentZoom], {
        animate: false,
        focal: e
    });
  });
  // FIRST : initialization
  var data = {
    "operators": {
      "operator1": {
        "top": 9900,
        "left": 9600,
        "properties": {
          "operatorLabelKeyValue1": {},
          "operatorLabelKeyValue2": {},
          "operatorLabelKeyValue3": {},
          "operatorLabelKeyValue1_ann": {},
          "operatorLabelKeyValue2_ann": {},
          "operatorLabelKeyValue3_ann": {},
          "namespace": "default",
          "title": "Ingress test-ingress",
          "inputs": {},
          "outputs": {
            "output_1": {
              "label": "REST /(.*)"
            },
            "output_2": {
              "label": "REST /123"
            },
            "output_3": {
              "label": "REST /456"
            }
          },
          "attribute": {
            "tls_hosts": "test"
          }
        }
      },
      "operator2": {
        "top": 9920,
        "left": 9860,
        "properties": {
          "operatorLabelKeyValue1": {},
          "operatorLabelKeyValue2": {},
          "operatorLabelKeyValue3": {},
          "operatorLabelKeyValue1_ann": {},
          "operatorLabelKeyValue2_ann": {},
          "operatorLabelKeyValue3_ann": {},
          "namespace": "default",
          "title": "Service test-service",
          "inputs": {
            "input_1": {
              "label": "svcPort 80"
            },
            "input_2": {
              "label": "svcPort 443"
            },
            "input_3": {
              "label": "svcPort 22"
            }
          },
          "outputs": {
            "output_1": {
              "label": "port 80"
            },
            "output_2": {
              "label": "port 443"
            },
            "output_3": {
              "label": "port 8080"
            }
          },
          "attribute": {
            "type": "ClusterIP"
          }
        }
      },
      "operator3": {
        "top": 10140,
        "left": 9880,
        "properties": {
          "operatorLabelKeyValue1": {},
          "operatorLabelKeyValue2": {},
          "operatorLabelKeyValue3": {},
          "operatorLabelKeyValue1_ann": {},
          "operatorLabelKeyValue2_ann": {},
          "operatorLabelKeyValue3_ann": {},
          "namespace": "default",
          "title": "Deployment test-deployment",
          "inputs": {
            "input_1": {
              "label": "targetPort 80"
            },
            "input_2": {
              "label": "targetPort 22"
            },
            "input_3": {
              "label": "targetPort 443"
            }
          },
          "outputs": {
            "output_1": {
              "label": "pod"
            }
          },
          "attribute": {
            "replicas": "1"
          }
        }
      },
      "operator4": {
        "top": 10140,
        "left": 10120,
        "properties": {
          "operatorLabelKeyValue1": {},
          "operatorLabelKeyValue2": {},
          "operatorLabelKeyValue3": {},
          "operatorLabelKeyValue1_ann": {},
          "operatorLabelKeyValue2_ann": {},
          "operatorLabelKeyValue3_ann": {},
          "namespace": "default",
          "title": "Pod test-pod",
          "inputs": {
            "input_1": {
              "label": ""
            }
          },
          "outputs": {
            "output_1": {
              "label": "container"
            },
            "output_2": {
              "label": "container"
            },
            "output_3": {
              "label": "container"
            },
            "mount_1": {
              "isMount": true,
              "label": "mount"
            },
            "mount_2": {
              "isMount": true,
              "label": ""
            }
          },
          "attribute": {
            "imagePullSecrets": ""
          }
        }
      },
      "operator5": {
        "top": 10140,
        "left": 10400,
        "properties": {
          "operatorLabelKeyValue1": {},
          "operatorLabelKeyValue2": {},
          "operatorLabelKeyValue3": {},
          "operatorLabelKeyValue1_ann": {},
          "operatorLabelKeyValue2_ann": {},
          "operatorLabelKeyValue3_ann": {},
          "namespace": "default",
          "title": "Container test-container",
          "inputs": {
            "input_1": {
              "label": "containerPort 22"
            },
            "input_2": {
              "label": "containerPort 80"
            },
            "input_3": {
              "label": "containerPort 443"
            }
          },
          "outputs": {
            "output_1": {
              "label": "image"
            },
            "mount_1": {
              "isMount": true,
              "label": "mount"
            },
            "mount_2": {
              "isMount": true,
              "label": ""
            }
          },
          "attribute": {
            "imagePullPolicy": "IfNotPresent",
            "env": {
              "envArray": [
                {
                  "name": "",
                  "value": "",
                  "mode": "env",
                  "secretName": "",
                  "secretKey": "",
                  "configMapName": "",
                  "configMapKey": ""
                }
              ],
              "envNum": 1,
            },
            "mountPath_1": "",
            "mountPath_2": ""
          }
        }
      },
      "operator6": {
        "top": 10140,
        "left": 10680,
        "properties": {
          "operatorLabelKeyValue1": {},
          "operatorLabelKeyValue2": {},
          "operatorLabelKeyValue3": {},
          "operatorLabelKeyValue1_ann": {},
          "operatorLabelKeyValue2_ann": {},
          "operatorLabelKeyValue3_ann": {},
          "namespace": "default",
          "title": "Image test-image",
          "inputs": {
            "input_1": {
              "label": "image"
            }
          },
          "attribute": {
            "imageRepository": "nginx",
            "imageTag": "latest"
          }
        }
      }
    },
    "links": {
      "link_1": {
        "fromOperator": "operator1",
        "fromConnector": "output_1",
        "toOperator": "operator2",
        "toConnector": "input_1"
      },
      "link_2": {
        "fromOperator": "operator2",
        "fromConnector": "output_1",
        "toOperator": "operator3",
        "toConnector": "input_1"
      },
      "link_3": {
        "fromOperator": "operator3",
        "fromConnector": "output_1",
        "toOperator": "operator4",
        "toConnector": "input_1"
      },
      "link_4": {
        "fromOperator": "operator4",
        "fromConnector": "output_1",
        "toOperator": "operator5",
        "toConnector": "input_1"
      },
      "link_5": {
        "fromOperator": "operator5",
        "fromConnector": "output_1",
        "toOperator": "operator6",
        "toConnector": "input_1"
      }
    },
    "operatorTypes": {}
    };
  
  var $operatorProperties = $('#operator_properties');
  var $linkProperties = $('#link_properties');
  var $operatorTitle = $('#operator_title');
  var $linkColor = $('#link_color');
  var $operatorSection = $('#section_left_right');
  var $operatorKeyValuePair = $('#section_keyValue');
  var $operatorKeyValuePair_ann = $('#section_keyValue_ann');
  var $operatorSectionAttribute = $('#section_attribute');
  var $selectNamespace = $('#select_namespace');
  var $rightColumn = $('#right_column');
  var selectNamespaceLis = document.getElementById('select_namespace');
  var inputDiv = document.getElementById("operator_title");
  
  // deal with input / output
  var $operator_input = {};
  for (var i = 1; i <= 3; i++) {
    $operator_input['operator_input_' + i] = $('#operator_input_' + i);
  }
  var $operator_output = {};
  for (var i = 1; i <= 3; i++) {
    $operator_output['operator_output_' + i] = $('#operator_output_' + i);
  }
  var operator_input_html = {};
  for (var i = 1; i <= 3; i++) {
    operator_input_html['operator_input_' + i] = document.getElementById('operator_input_' + i);
  }
  var operator_output_html = {};
  for (var i = 1; i <= 3; i++) {
    operator_output_html['operator_output_' + i] = document.getElementById('operator_output_' + i);
  }

  // deal with key-value
  var $operator_key = {};
  for (var i = 1; i <= 3; i++) {
    $operator_key['operatorLabelKey' + i] = $('#operatorLabelKey' + i);
  }
  var $operator_value = {};
  for (var i = 1; i <= 3; i++) {
    $operator_value['operatorLabelValue' + i] = $('#operatorLabelValue' + i);
  }
  var operator_key_html = {};
  for (var i = 1; i <= 3; i++) {
    operator_key_html['operatorLabelKey' + i] = document.getElementById('operatorLabelKey' + i);
  }
  var operator_value_html = {};
  for (var i = 1; i <= 3; i++) {
    operator_value_html['operatorLabelValue' + i] = document.getElementById('operatorLabelValue' + i);
  }

  // deal with key-value_ann
  var $operator_key_ann = {};
  for (var i = 1; i <= 3; i++) {
    $operator_key_ann['operatorLabelKey' + i + '_ann'] = $('#operatorLabelKey' + i + '_ann');
  }
  var $operator_value_ann = {};
  for (var i = 1; i <= 3; i++) {
    $operator_value_ann['operatorLabelValue' + i + '_ann'] = $('#operatorLabelValue' + i + '_ann');
  }
  var operator_key_html_ann = {};
  for (var i = 1; i <= 3; i++) {
    operator_key_html_ann['operatorLabelKey' + i + '_ann'] = document.getElementById('operatorLabelKey' + i + '_ann');
  }
  var operator_value_html_ann = {};
  for (var i = 1; i <= 3; i++) {
    operator_value_html_ann['operatorLabelValue' + i + '_ann'] = document.getElementById('operatorLabelValue' + i + '_ann');
  }

  // deal with attribute
  var section_attribute = document.getElementById("section_attribute");

  // deal with storageclass
  function update_storageclass() {
    var allData = $flowchart.flowchart('getData');
    // find namespace
    var newData = allData;
    for (var key in allData.operators) {
      // check if the property/key is defined in the object itself, not in parent
      if (allData.operators.hasOwnProperty(key)) {           
        var valueData = allData.operators[key];
        var OperatorType = valueData.properties.title.split(" ")[0];
        var OperatorTitle = valueData.properties.title.split(" ")[1];
        if (OperatorType === "StorageClass" && !(OperatorTitle === undefined)) {
          var top = valueData.top;
          var left = valueData.left;
          var right, bottom;
          if (valueData.properties.class === "storageclass") {
            right = left + 800;
            bottom = top + 400;
          } else if (valueData.properties.class === "mediumStorageclass") {
            right = left + 1200;
            bottom = top + 600;
          } else if (valueData.properties.class === "largeStorageclass") {
            right = left + 1600;
            bottom = top + 800;
          } 
          
          // update all other types' StorageClass
          for (var key2 in allData.operators) {
            if (allData.operators.hasOwnProperty(key2)) {
              var SelectedValueData = allData.operators[key2];
              var SelectedOperatorType = SelectedValueData.properties.title.split(" ")[0];
              var SelectedOperatorTitle = SelectedValueData.properties.title.split(" ")[1];
              if (SelectedOperatorType === "PersistentVolumeClaim" || SelectedOperatorType === "PersistentVolume") {
                var SelectedOperatorTop = SelectedValueData.top + 60;
                var SelectedOperatorLeft = SelectedValueData.left + 60;
                // if in StorageClass
                if ((top<=SelectedOperatorTop) && (SelectedOperatorTop<=bottom) && (SelectedOperatorLeft<=right) && (left<=SelectedOperatorLeft)){
                  // update
                  newData.operators[key2].properties.storageclass = OperatorTitle;
                } else {
                  newData.operators[key2].properties.storageclass = "default";
                }
              }
            }
          }
        }
      }
    }
    $flowchart.flowchart('setData', newData);
  }

  // deal with namespace
  function update_namespace() {
    var allData = $flowchart.flowchart('getData');
    // find namespace
    var newData = allData;
    for (var key in allData.operators) {
      // check if the property/key is defined in the object itself, not in parent
      if (allData.operators.hasOwnProperty(key)) {           
        var valueData = allData.operators[key];
        var OperatorType = valueData.properties.title.split(" ")[0];
        var OperatorTitle = valueData.properties.title.split(" ")[1];
        if (OperatorType === "Namespace" && !(OperatorTitle === undefined)) {
          var top = valueData.top;
          var left = valueData.left;
          var right, bottom;
          if (valueData.properties.class === "namespace") {
            right = left + 1400;
            bottom = top + 700;
          } else if (valueData.properties.class === "mediumNamespace") {
            right = left + 1800;
            bottom = top + 900;
          } else if (valueData.properties.class === "largeNamespace") {
            right = left + 2200;
            bottom = top + 1100;
          } 
          
          // update all other types' namespace
          for (var key2 in allData.operators) {
            if (allData.operators.hasOwnProperty(key2)) {
              var SelectedValueData = allData.operators[key2];
              var SelectedOperatorType = SelectedValueData.properties.title.split(" ")[0];
              var SelectedOperatorTitle = SelectedValueData.properties.title.split(" ")[1];
              if (!(SelectedOperatorType === "Namespace")) {
                var SelectedOperatorTop = SelectedValueData.top + 60;
                var SelectedOperatorLeft = SelectedValueData.left + 60;
                // if in namespace
                if ((top<=SelectedOperatorTop) && (SelectedOperatorTop<=bottom) && (SelectedOperatorLeft<=right) && (left<=SelectedOperatorLeft)){
                  // update
                  newData.operators[key2].properties.namespace = OperatorTitle;
                } else {
                  newData.operators[key2].properties.namespace = "default";
                }
              }
            }
          }
        }
      }
    }
    $flowchart.flowchart('setData', newData);
  }

  function clean_status() {
    var myNode = document.getElementById("statusInfo");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }
  }

  $flowchart.flowchart({
    data: data,
    // SECOND : mouse hover
    onOperatorMouseOver: function(operatorId) {
      clean_status();
      var OperatorTitle = $flowchart.flowchart('getOperatorTitle', operatorId);
      var OperatorType = OperatorTitle.split(" ")[0]
      // skip if operator type is namespace
      if (OperatorType === "Namespace" || OperatorType === "StorageClass") {
        return true;
      }
      var OperatorData = $flowchart.flowchart('getOperatorData', operatorId);
      var myNode = document.getElementById("statusInfo");
      
      // labels
      if (!(OperatorTitle === "Certificate" || OperatorTitle === "ClusterIssuer")) { // exception
        myNode.appendChild(document.createTextNode("Labels:"));
        myNode.appendChild(document.createElement("BR"));
        for (var i = 1; i <= 3; i++) {
          var OperatorKeyValue = OperatorData.properties['operatorLabelKeyValue' + i]
          if (Object.keys(OperatorKeyValue).length === 1) {
            var appendStr = "";
            appendStr += '\u00a0Key: ' + Object.keys(OperatorKeyValue)[0] + ', Value: ' + OperatorKeyValue[Object.keys(OperatorKeyValue)[0]]; 
            myNode.appendChild(document.createTextNode(appendStr));
            myNode.appendChild(document.createElement("BR"));
          }
        }
      }

      // annotations
      if (!(OperatorTitle === "Certificate" || OperatorTitle === "ClusterIssuer")) { // exception
        myNode.appendChild(document.createTextNode("Annotations:"));
        myNode.appendChild(document.createElement("BR"));
        for (var i = 1; i <= 3; i++) {
          var OperatorKeyValue_ann = OperatorData.properties['operatorLabelKeyValue' + i + '_ann']
          if (Object.keys(OperatorKeyValue_ann).length === 1) {
            var appendStr = "";
            appendStr += '\u00a0Key: ' + Object.keys(OperatorKeyValue_ann)[0] + ', Value: ' + OperatorKeyValue_ann[Object.keys(OperatorKeyValue_ann)[0]]; 
            myNode.appendChild(document.createTextNode(appendStr));
            myNode.appendChild(document.createElement("BR"));
          }
        }
      }
      var appendStr = "";
      appendStr += 'namespace: ' + OperatorData.properties.namespace;
      myNode.appendChild(document.createTextNode(appendStr));
      myNode.appendChild(document.createElement("BR"));

      // storage class
      if (OperatorType === "PersistentVolumeClaim" || OperatorType === "PersistentVolume") {
        var appendStr = "";
        appendStr += 'storageclass: ' + OperatorData.properties.storageclass;
        myNode.appendChild(document.createTextNode(appendStr));
        myNode.appendChild(document.createElement("BR"));
      }

      // append attribute to section
      var OperatorAttribute = OperatorData.properties.attribute;
      for (var key in OperatorAttribute) {
        if (OperatorAttribute.hasOwnProperty(key)) { 
          if (typeof OperatorAttribute[key] === 'string') {  
            var attr_appendStr = "";
            attr_appendStr += key + ': ' + OperatorAttribute[key];           
            myNode.appendChild(document.createTextNode(attr_appendStr));
            myNode.appendChild(document.createElement("BR"));
          }
          // env
          if (typeof OperatorAttribute[key] === 'object' && key === 'env') {
            myNode.appendChild(document.createTextNode("ENV"));
            myNode.appendChild(document.createElement("BR"));
            var envArray = OperatorAttribute[key].envArray;
            var envNum = OperatorAttribute[key].envNum;
            for (var i = 0; i < envNum; i++) {
              if (envArray[i].mode === "secret") {
                myNode.appendChild(document.createTextNode("\u00a0\u00a0"));
                var attr_appendStr = "";
                attr_appendStr += "name" + ': ' + envArray[i].name;
                myNode.appendChild(document.createTextNode(attr_appendStr));
                myNode.appendChild(document.createElement("BR"));
                myNode.appendChild(document.createTextNode("\u00a0\u00a0\u00a0\u00a0"));
                var attr_appendStr = "";
                attr_appendStr += "secretName" + ': ' + envArray[i].secretName;
                myNode.appendChild(document.createTextNode(attr_appendStr));
                myNode.appendChild(document.createElement("BR"));
                myNode.appendChild(document.createTextNode("\u00a0\u00a0\u00a0\u00a0"));
                var attr_appendStr = "";
                attr_appendStr += "secretKey" + ': ' + envArray[i].secretKey;
                myNode.appendChild(document.createTextNode(attr_appendStr));
                myNode.appendChild(document.createElement("BR")); 
              } else if (envArray[i].mode === "env") {
                myNode.appendChild(document.createTextNode("\u00a0\u00a0"));
                var attr_appendStr = "";
                attr_appendStr += "name" + ': ' + envArray[i].name;
                myNode.appendChild(document.createTextNode(attr_appendStr));
                myNode.appendChild(document.createElement("BR"));
                myNode.appendChild(document.createTextNode("\u00a0\u00a0"));
                var attr_appendStr = "";
                attr_appendStr += "value" + ': ' + envArray[i].value;
                myNode.appendChild(document.createTextNode(attr_appendStr));
                myNode.appendChild(document.createElement("BR")); 
              } else if (envArray[i].mode === "configMap") {
                myNode.appendChild(document.createTextNode("\u00a0\u00a0"));
                var attr_appendStr = "";
                attr_appendStr += "name" + ': ' + envArray[i].name;
                myNode.appendChild(document.createTextNode(attr_appendStr));
                myNode.appendChild(document.createElement("BR"));
                myNode.appendChild(document.createTextNode("\u00a0\u00a0\u00a0\u00a0"));
                var attr_appendStr = "";
                attr_appendStr += "configMapName" + ': ' + envArray[i].configMapName;
                myNode.appendChild(document.createTextNode(attr_appendStr));
                myNode.appendChild(document.createElement("BR"));
                myNode.appendChild(document.createTextNode("\u00a0\u00a0\u00a0\u00a0"));
                var attr_appendStr = "";
                attr_appendStr += "configMapKey" + ': ' + envArray[i].configMapKey;
                myNode.appendChild(document.createTextNode(attr_appendStr));
                myNode.appendChild(document.createElement("BR")); 
              }
            }
          }
          // secret or configmap's data
          if (typeof OperatorAttribute[key] === 'object' && key === 'data') {
            myNode.appendChild(document.createTextNode("data:"));
            myNode.appendChild(document.createElement("BR"));
            var dataArray = OperatorAttribute[key].dataArray;
            var dataNum = OperatorAttribute[key].dataNum;
            for (var i = 0; i < dataNum; i++) {
              if (!(dataArray[i].key === "")) {
                myNode.appendChild(document.createTextNode("\u00a0\u00a0"));
                var attr_appendStr = "";
                attr_appendStr += dataArray[i].key + ': ' + dataArray[i].value;
                myNode.appendChild(document.createTextNode(attr_appendStr));
                myNode.appendChild(document.createElement("BR"));
              }
            }
          }
          // secret's stringData
          if (typeof OperatorAttribute[key] === 'object' && key === 'stringData') {
            myNode.appendChild(document.createTextNode("stringData:"));
            myNode.appendChild(document.createElement("BR"));
            var dataArray = OperatorAttribute[key].stringDataArray;
            var dataNum = OperatorAttribute[key].stringDataNum;
            for (var i = 0; i < dataNum; i++) {
              if (!(dataArray[i].key === "")) {
                myNode.appendChild(document.createTextNode("\u00a0\u00a0"));
                var attr_appendStr = "";
                attr_appendStr += dataArray[i].key + ': ' + dataArray[i].value;
                myNode.appendChild(document.createTextNode(attr_appendStr));
                myNode.appendChild(document.createElement("BR"));
              }
            }
          }
        }
      }

      return true;
    },
    onOperatorMouseOut: function(operatorId) {
      clean_status();
      return true;
    },
    // THIRD : select
    onOperatorSelect: function(operatorId) {
      clean_status();
      update_namespace();
      update_storageclass();
      $rightColumn.show();

      var OperatorTitle = $flowchart.flowchart('getOperatorTitle', operatorId);
      var OperatorType = OperatorTitle.split(" ")[0]

      // EIGHTH: deal with usage
      var section_usage = document.getElementById("usage_section");
      while (section_usage.hasChildNodes()) {
        section_usage.removeChild(section_usage.lastChild);
      }
      section_usage.appendChild(document.createTextNode("Usage"));
      section_usage.appendChild(document.createElement("BR"));
      if (OperatorType === "Ingress") {
        var gif = document.createElement("img");
        gif.setAttribute("src", "images/ingress.gif");
        gif.setAttribute("width", "300px")
        section_usage.appendChild(gif);
        section_usage.appendChild(document.createElement("BR"));
        var usage_text = "Ingress only connects to Service. Ingress supports REST-like routing to connect to the specific Service. Fill in the Name and tls_hosts field. Add labels or annotations if needed.";
        section_usage.appendChild(document.createTextNode(usage_text));
      } else if (OperatorType === "Service") {
        var gif = document.createElement("img");
        gif.setAttribute("src", "images/service.gif");
        gif.setAttribute("width", "300px")
        section_usage.appendChild(gif);
        section_usage.appendChild(document.createElement("BR"));
        var usage_text = "Service can ethier connect to deployment, pod or endpoint. But here we restrict the output type to be deployment. svcPort on the Left is exposed to ingress, while port on the right is forwarded from the deployment's targetPort(which means Pod' targetPort). You can deem service as a iptables which forward packets to backend(Pods).";
        section_usage.appendChild(document.createTextNode(usage_text));
      } else if (OperatorType === "Deployment") {
        var gif = document.createElement("img");
        gif.setAttribute("src", "images/deployment.gif");
        gif.setAttribute("width", "300px")
        section_usage.appendChild(gif);
        section_usage.appendChild(document.createElement("BR"));
        var usage_text = "Connect deployment to pod. With deployment, pods can be replicated to more than one to scale up our services. Deployment also provide replicaSet controller to keep pods running."
        section_usage.appendChild(document.createTextNode(usage_text));
      } else if (OperatorType === "Pod") {
        var gif = document.createElement("img");
        gif.setAttribute("src", "images/pod.gif");
        gif.setAttribute("width", "300px")
        section_usage.appendChild(gif);
        section_usage.appendChild(document.createElement("BR"));
        var usage_text = "Connect Pod to Containers. One pod can host multiple containers, and all the containers share the same CPU, memory, network resources, etc.";
        section_usage.appendChild(document.createTextNode(usage_text));
        section_usage.appendChild(document.createElement("BR"));
        var usage_text = "You can mount volumes on the Pod. Connect the arrow below to the volume.";
        section_usage.appendChild(document.createTextNode(usage_text));
      } else if (OperatorType === "Container") {
        var gif = document.createElement("img");
        gif.setAttribute("src", "images/container.gif");
        gif.setAttribute("width", "300px")
        section_usage.appendChild(gif);
        section_usage.appendChild(document.createElement("BR"));
        var usage_text = "Connect container to image, every container with one image. We can also mount volume on container if the Pod has already mount the same volume because the resources in the pod are shared among containers.";
        section_usage.appendChild(document.createTextNode(usage_text));
      } else if (OperatorType === "Image") {
        var usage_text = "Specify repository and tag for the image.";
        section_usage.appendChild(document.createTextNode(usage_text));
      } else if (OperatorType === "Volume") {
        var gif = document.createElement("img");
        gif.setAttribute("src", "images/volume.gif");
        gif.setAttribute("width", "300px")
        section_usage.appendChild(gif);
        section_usage.appendChild(document.createElement("BR"));
        var usage_text = "Volume can connect to different resources, like PVC, secret, configMap, etc.";
        section_usage.appendChild(document.createTextNode(usage_text));
      } else if (OperatorType === "Namespace") {
        var gif = document.createElement("img");
        gif.setAttribute("src", "images/namespace.gif");
        gif.setAttribute("width", "300px")
        section_usage.appendChild(gif);
        section_usage.appendChild(document.createElement("BR"));
        var usage_text = "Drag namespace object onto other resource, and all the namespaced resource will be under the same namespace.";
        section_usage.appendChild(document.createTextNode(usage_text));
      } else if (OperatorType === "StorageClass") {
        var gif = document.createElement("img");
        gif.setAttribute("src", "images/storageclass.gif");
        gif.setAttribute("width", "300px")
        section_usage.appendChild(gif);
        section_usage.appendChild(document.createElement("BR"));
        var usage_text = "Drag storage object onto PV or PVC, and they'll be under the same storageClass.";
        section_usage.appendChild(document.createTextNode(usage_text));
      }

      inputDiv.placeholder = OperatorType + " name";
      $operatorTitle.val(OperatorTitle.split(" ")[1]);
      
      // FORTH block specific space
      if (OperatorType === "Namespace" || OperatorType === "StorageClass") {
        $selectNamespace.show();
        $operatorProperties.show();
        $operatorSection.hide();
        $operatorKeyValuePair.hide();
        $operatorKeyValuePair_ann.hide();
        $operatorSectionAttribute.hide();
        return true;
      } else if (OperatorType === "Secret" || OperatorType === "ConfigMap" || OperatorType === "AzureKeyVaultSecret" || OperatorType === "PersistentVolumeClaim" || OperatorType === "Pod") {
        $selectNamespace.hide();
        $operatorSection.hide();
        $operatorKeyValuePair.show();
        $operatorKeyValuePair_ann.show();
        $operatorSectionAttribute.show();
      } else if (OperatorType === "Certificate" || OperatorType === "ClusterIssuer" || OperatorType === "Volume" || OperatorType === "Image") {
        $selectNamespace.hide();
        $operatorSection.hide();
        $operatorKeyValuePair.hide();
        $operatorKeyValuePair_ann.hide();
        $operatorSectionAttribute.show();
      } else {
        $selectNamespace.hide();
        $operatorSection.show();
        $operatorKeyValuePair.show();
        $operatorKeyValuePair_ann.show();
        $operatorSectionAttribute.show();
      }

      var OperatorData = $flowchart.flowchart('getOperatorData', operatorId);      
      console.log(OperatorData);

      // input / output differs on different kinds.
      var KindsRules = {'Ingress':{'input':{'placeholder':'disabled','disabled':true},
                                   'output':{'placeholder':'REST','disabled':false}},
                        'Service':{'input':{'placeholder':'svcPort','disabled':false},
                                   'output':{'placeholder':'port','disabled':false}},
                        'Deployment':{'input':{'placeholder':'targetPort','disabled':false},
                                   'output':{'placeholder':'disabled','disabled':true}},
                        'Pod':{'input':{'placeholder':'disabled','disabled':true},
                                   'output':{'placeholder':'container','disabled':true}},
                        'Container':{'input':{'placeholder':'containerPort','disabled':false},
                                   'output':{'placeholder':'disabled','disabled':true}},
                        'Image':{'input':{'placeholder':'disabled','disabled':true},
                                   'output':{'placeholder':'disabled','disabled':true}}}
      for (var i = 1; i <= 3; i++) {
        if (!(OperatorData.properties.inputs === null || OperatorData.properties.inputs === undefined || Object.keys(OperatorData.properties.inputs).length === 0)) {
          if (!(OperatorData.properties.inputs['input_' + i] === undefined)) {
            var OperatorInputLabel = OperatorData.properties.inputs['input_' + i].label;
            var OperatorInputTrueData = OperatorInputLabel.split(" ")[1];
            $operator_input['operator_input_' + i].val(OperatorInputTrueData);
          } else {
            $operator_input['operator_input_' + i].val('disabled');
          }
        } else {
          $operator_input['operator_input_' + i].val('disabled');
        }
        if (OperatorType in KindsRules) {
          operator_input_html['operator_input_' + i].disabled = KindsRules[OperatorType]['input']['disabled'];
          operator_input_html['operator_input_' + i].placeholder = KindsRules[OperatorType]['input']['placeholder'];
        }
      }
      for (var i = 1; i <= 3; i++) {
        if (!(OperatorData.properties.outputs === null || OperatorData.properties.outputs === undefined || Object.keys(OperatorData.properties.outputs).length === 0)) {
          if (!(OperatorData.properties.outputs['output_' + i] === undefined)) {
            var OperatorOutputLabel = OperatorData.properties.outputs['output_' + i].label;
            var OperatorOutputTrueData = OperatorOutputLabel.split(" ")[1];
            $operator_output['operator_output_' + i].val(OperatorOutputTrueData);
          } else {
            $operator_output['operator_output_' + i].val('disabled');
          }
        } else {
          $operator_output['operator_output_' + i].val('disabled');
        }
        if (OperatorType in KindsRules) {
          operator_output_html['operator_output_' + i].disabled = KindsRules[OperatorType]['output']['disabled']; 
          operator_output_html['operator_output_' + i].placeholder = KindsRules[OperatorType]['output']['placeholder'];
        }
      }

      // Key Value
      for (var i = 1; i <= 3; i++) {
        var OperatorKeyValue = OperatorData.properties['operatorLabelKeyValue' + i]
        if (Object.keys(OperatorKeyValue).length === 1) {
          $operator_key['operatorLabelKey' + i].val(Object.keys(OperatorKeyValue)[0]);
          $operator_value['operatorLabelValue' + i].val(OperatorKeyValue[Object.keys(OperatorKeyValue)[0]]);
          operator_key_html['operatorLabelKey' + i] = Object.keys(OperatorKeyValue)[0];
          operator_value_html['operatorLabelValue' + i] = OperatorKeyValue[Object.keys(OperatorKeyValue)[0]];
        } else {
          $operator_key['operatorLabelKey' + i].val("");
          $operator_value['operatorLabelValue' + i].val("");
          operator_key_html['operatorLabelKey' + i] = "";
          operator_value_html['operatorLabelValue' + i] = "";
        }
      }

      // Key Value_ann
      for (var i = 1; i <= 3; i++) {
        var OperatorKeyValue_ann = OperatorData.properties['operatorLabelKeyValue' + i + '_ann']
        if (Object.keys(OperatorKeyValue_ann).length === 1) {
          $operator_key_ann['operatorLabelKey' + i + '_ann'].val(Object.keys(OperatorKeyValue_ann)[0]);
          $operator_value_ann['operatorLabelValue' + i + '_ann'].val(OperatorKeyValue_ann[Object.keys(OperatorKeyValue_ann)[0]]);
          operator_key_html_ann['operatorLabelKey' + i + '_ann'] = Object.keys(OperatorKeyValue_ann)[0];
          operator_value_html_ann['operatorLabelValue' + i + '_ann'] = OperatorKeyValue_ann[Object.keys(OperatorKeyValue_ann)[0]];
        } else {
          $operator_key_ann['operatorLabelKey' + i + '_ann'].val("");
          $operator_value_ann['operatorLabelValue' + i + '_ann'].val("");
          operator_key_html_ann['operatorLabelKey' + i + '_ann'] = "";
          operator_value_html_ann['operatorLabelValue' + i + '_ann'] = "";
        }
      }

      // clear out 
      while (section_attribute.hasChildNodes()) {
        section_attribute.removeChild(section_attribute.lastChild);
      }
      var attributeTitle = document.createElement('span');
      attributeTitle.style.fontSize = '20px';
      attributeTitle.appendChild(document.createTextNode('Attribute'));
      section_attribute.appendChild(attributeTitle);
      section_attribute.appendChild(document.createElement("BR"));

      // FIFTH : append to attribute section
      // append attribute to section
      var OperatorAttribute = OperatorData.properties.attribute;
      for (var key in OperatorAttribute) {
        if (OperatorAttribute.hasOwnProperty(key)) {
          if (typeof OperatorAttribute[key] === 'string') {      
            section_attribute.appendChild(document.createTextNode(key));
            var input = document.createElement("input");
            input.type = "text";
            input.name = key;
            input.value = OperatorAttribute[key];
            (function () {
              var tempKey = key;
              input.addEventListener("keyup", function(v) {
                var curSelectedOperatorId = $flowchart.flowchart('getSelectedOperatorId');
                var curOperatorData = $flowchart.flowchart('getOperatorData', curSelectedOperatorId);
                curOperatorData.properties.attribute[tempKey] = v.target.value;
                $flowchart.flowchart('setOperatorData', curSelectedOperatorId, curOperatorData);
              })
            }());
            section_attribute.appendChild(input);
            section_attribute.appendChild(document.createElement("BR"));
          }
          // ENV
          if (typeof OperatorAttribute[key] === 'object' && key === 'env') {      
            section_attribute.appendChild(document.createTextNode("env number"));
            var selectList = document.createElement("select");
            selectList.id = "env number";
            var selectArray = ["0", "1", "2", "3", "4", "5"];
            //Create and append the options
            for (var i = 0; i < selectArray.length; i++) {
              var option = document.createElement("option");
              option.value = selectArray[i];
              option.text = selectArray[i];
              if (OperatorAttribute[key].envNum === parseInt(selectArray[i], 10)) {
                option.selected = "selected";
              }
              selectList.appendChild(option);
            }
            selectList.addEventListener("change", function(s) {
              var curSelectedOperatorId = $flowchart.flowchart('getSelectedOperatorId');
              var curOperatorData = $flowchart.flowchart('getOperatorData', curSelectedOperatorId);
              var oriNum = curOperatorData.properties.attribute.env.envNum;
              var targetNum = parseInt(s.target.value, 10);
              if (oriNum < targetNum) {
                curOperatorData.properties.attribute.env.envNum = targetNum;
                for (var i = 0; i < (targetNum - oriNum); i++) {
                  curOperatorData.properties.attribute.env.envArray.push({
                    "name": "",
                    "value": "",
                    "mode": "env",
                    "secretName": "",
                    "secretKey": "",
                    "configMapName": "",
                    "configMapKey": ""
                  });
                }
              } else {
                curOperatorData.properties.attribute.env.envNum = targetNum;
                var NewArray = [];
                for (var i = 0; i < targetNum; i++) {
                  NewArray.push(curOperatorData.properties.attribute.env.envArray[i]);
                }
                curOperatorData.properties.attribute.env.envArray = NewArray;
              }
              $flowchart.flowchart('setOperatorData', curSelectedOperatorId, curOperatorData);
              $flowchart.flowchart('selectOperator', curSelectedOperatorId);
            })
            section_attribute.appendChild(selectList);
            section_attribute.appendChild(document.createElement("BR"));
            
            var envArray = OperatorAttribute[key].envArray;
            var arrayLength = OperatorAttribute[key].envNum;
            for (var i = 0; i < arrayLength; i++) {
              section_attribute.appendChild(document.createTextNode("\u00a0\u00a0"));
              section_attribute.appendChild(document.createTextNode("mode"));
              var selectList = document.createElement("select");
              var selectArray = ["env", "secret", "configMap"];
              for (var j = 0; j < selectArray.length; j++) {
                var option = document.createElement("option");
                option.value = selectArray[j];
                option.text = selectArray[j];
                if (envArray[i].mode === selectArray[j]) {
                  option.selected = "selected";
                }
                selectList.appendChild(option);
              }
              // fromSecret select
              (function () {
                var temp = i;
                selectList.addEventListener("change", function(s) {
                  var curSelectedOperatorId = $flowchart.flowchart('getSelectedOperatorId');
                  var curOperatorData = $flowchart.flowchart('getOperatorData', curSelectedOperatorId);
                  console.log(temp);
                  curOperatorData.properties.attribute.env.envArray[temp].name = "";
                  curOperatorData.properties.attribute.env.envArray[temp].value = "";
                  curOperatorData.properties.attribute.env.envArray[temp].secretName = "";
                  curOperatorData.properties.attribute.env.envArray[temp].secretKey = "";
                  curOperatorData.properties.attribute.env.envArray[temp].configMapName = "";
                  curOperatorData.properties.attribute.env.envArray[temp].configMapKey = "";
                  curOperatorData.properties.attribute.env.envArray[temp].mode = s.target.value.toString();
                  $flowchart.flowchart('setOperatorData', curSelectedOperatorId, curOperatorData);
                  $flowchart.flowchart('selectOperator', curSelectedOperatorId);
                })
              }());
              section_attribute.appendChild(selectList);
              section_attribute.appendChild(document.createElement("BR"));
              // key-value
              if (envArray[i].mode === "secret") {
                // name
                section_attribute.appendChild(document.createTextNode("\u00a0\u00a0\u00a0\u00a0"));
                section_attribute.appendChild(document.createTextNode("name"));
                var input = document.createElement("input");
                input.type = "text";
                input.name = "name";
                input.value = envArray[i].name;
                (function () {
                  var temp = i
                  input.addEventListener("keyup", function(v) {
                    var curSelectedOperatorId = $flowchart.flowchart('getSelectedOperatorId');
                    var curOperatorData = $flowchart.flowchart('getOperatorData', curSelectedOperatorId);
                    curOperatorData.properties.attribute.env.envArray[temp].name = v.target.value;
                    $flowchart.flowchart('setOperatorData', curSelectedOperatorId, curOperatorData);
                  })
                }());
                section_attribute.appendChild(input);
                section_attribute.appendChild(document.createElement("BR"));
                // secretName
                section_attribute.appendChild(document.createTextNode("\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"));
                section_attribute.appendChild(document.createTextNode("secretName"));
                var input = document.createElement("input");
                input.type = "text";
                input.name = "secretName";
                input.value = envArray[i].secretName;
                (function () {
                  var temp = i
                  input.addEventListener("keyup", function(v) {
                    var curSelectedOperatorId = $flowchart.flowchart('getSelectedOperatorId');
                    var curOperatorData = $flowchart.flowchart('getOperatorData', curSelectedOperatorId);
                    curOperatorData.properties.attribute.env.envArray[temp].secretName = v.target.value;
                    $flowchart.flowchart('setOperatorData', curSelectedOperatorId, curOperatorData);
                  })
                }());
                section_attribute.appendChild(input);
                section_attribute.appendChild(document.createElement("BR"));
                // secretKey
                section_attribute.appendChild(document.createTextNode("\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"));
                section_attribute.appendChild(document.createTextNode("secretKey"));
                var input = document.createElement("input");
                input.type = "text";
                input.name = "secretKey";
                input.value = envArray[i].secretKey;
                (function () {
                  var temp = i
                  input.addEventListener("keyup", function(v) {
                    var curSelectedOperatorId = $flowchart.flowchart('getSelectedOperatorId');
                    var curOperatorData = $flowchart.flowchart('getOperatorData', curSelectedOperatorId);
                    curOperatorData.properties.attribute.env.envArray[temp].secretKey = v.target.value;
                    $flowchart.flowchart('setOperatorData', curSelectedOperatorId, curOperatorData);
                  })
                }());
                section_attribute.appendChild(input);
              } else if (envArray[i].mode === "env") {
                // name
                section_attribute.appendChild(document.createTextNode("\u00a0\u00a0\u00a0\u00a0"));
                section_attribute.appendChild(document.createTextNode("name"));
                var input = document.createElement("input");
                input.type = "text";
                input.name = "name";
                input.value = envArray[i].name;
                (function () {
                  var temp = i
                  input.addEventListener("keyup", function(v) {
                    var curSelectedOperatorId = $flowchart.flowchart('getSelectedOperatorId');
                    var curOperatorData = $flowchart.flowchart('getOperatorData', curSelectedOperatorId);
                    curOperatorData.properties.attribute.env.envArray[temp].name = v.target.value;
                    $flowchart.flowchart('setOperatorData', curSelectedOperatorId, curOperatorData);
                  })
                }());
                section_attribute.appendChild(input);
                section_attribute.appendChild(document.createElement("BR"));
                // value
                section_attribute.appendChild(document.createTextNode("\u00a0\u00a0\u00a0\u00a0"));
                section_attribute.appendChild(document.createTextNode("value"));
                var input = document.createElement("input");
                input.type = "text";
                input.name = "value";
                input.value = envArray[i].value;
                (function () {
                  var temp = i
                  input.addEventListener("keyup", function(v) {
                    var curSelectedOperatorId = $flowchart.flowchart('getSelectedOperatorId');
                    var curOperatorData = $flowchart.flowchart('getOperatorData', curSelectedOperatorId);
                    curOperatorData.properties.attribute.env.envArray[temp].value = v.target.value;
                    $flowchart.flowchart('setOperatorData', curSelectedOperatorId, curOperatorData);
                  })
                }());
                section_attribute.appendChild(input);
              } else if (envArray[i].mode === "configMap") {
                // name
                section_attribute.appendChild(document.createTextNode("\u00a0\u00a0\u00a0\u00a0"));
                section_attribute.appendChild(document.createTextNode("name"));
                var input = document.createElement("input");
                input.type = "text";
                input.name = "name";
                input.value = envArray[i].name;
                (function () {
                  var temp = i
                  input.addEventListener("keyup", function(v) {
                    var curSelectedOperatorId = $flowchart.flowchart('getSelectedOperatorId');
                    var curOperatorData = $flowchart.flowchart('getOperatorData', curSelectedOperatorId);
                    curOperatorData.properties.attribute.env.envArray[temp].name = v.target.value;
                    $flowchart.flowchart('setOperatorData', curSelectedOperatorId, curOperatorData);
                  })
                }());
                section_attribute.appendChild(input);
                section_attribute.appendChild(document.createElement("BR"));
                // configMapName
                section_attribute.appendChild(document.createTextNode("\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"));
                section_attribute.appendChild(document.createTextNode("configMapName"));
                var input = document.createElement("input");
                input.type = "text";
                input.name = "configMapName";
                input.value = envArray[i].configMapName;
                (function () {
                  var temp = i
                  input.addEventListener("keyup", function(v) {
                    var curSelectedOperatorId = $flowchart.flowchart('getSelectedOperatorId');
                    var curOperatorData = $flowchart.flowchart('getOperatorData', curSelectedOperatorId);
                    curOperatorData.properties.attribute.env.envArray[temp].configMapName = v.target.value;
                    $flowchart.flowchart('setOperatorData', curSelectedOperatorId, curOperatorData);
                  })
                }());
                section_attribute.appendChild(input);
                section_attribute.appendChild(document.createElement("BR"));
                // configMapKey
                section_attribute.appendChild(document.createTextNode("\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"));
                section_attribute.appendChild(document.createTextNode("configMapKey"));
                var input = document.createElement("input");
                input.type = "text";
                input.name = "configMapKey";
                input.value = envArray[i].configMapKey;
                (function () {
                  var temp = i
                  input.addEventListener("keyup", function(v) {
                    var curSelectedOperatorId = $flowchart.flowchart('getSelectedOperatorId');
                    var curOperatorData = $flowchart.flowchart('getOperatorData', curSelectedOperatorId);
                    curOperatorData.properties.attribute.env.envArray[temp].configMapKey = v.target.value;
                    $flowchart.flowchart('setOperatorData', curSelectedOperatorId, curOperatorData);
                  })
                }());
                section_attribute.appendChild(input);
              }
              section_attribute.appendChild(document.createElement("BR"));
            }
          }
          // secret or configMap's data
          if (typeof OperatorAttribute[key] === 'object' && key === 'data') {
            section_attribute.appendChild(document.createTextNode("data number"));
            var selectList = document.createElement("select");
            selectList.id = "data number";
            var selectArray = ["0", "1", "2", "3", "4", "5"];
            //Create and append the options
            for (var i = 0; i < selectArray.length; i++) {
              var option = document.createElement("option");
              option.value = selectArray[i];
              option.text = selectArray[i];
              if (OperatorAttribute[key].dataNum === parseInt(selectArray[i], 10)) {
                option.selected = "selected";
              }
              selectList.appendChild(option);
            }
            selectList.addEventListener("change", function(s) {
              var curSelectedOperatorId = $flowchart.flowchart('getSelectedOperatorId');
              var curOperatorData = $flowchart.flowchart('getOperatorData', curSelectedOperatorId);
              var oriNum = curOperatorData.properties.attribute.data.dataNum;
              var targetNum = parseInt(s.target.value, 10);
              if (oriNum < targetNum) {
                curOperatorData.properties.attribute.data.dataNum = targetNum;
                for (var i = 0; i < (targetNum - oriNum); i++) {
                  curOperatorData.properties.attribute.data.dataArray.push({
                    "key": "",
                    "value": "",
                  });
                }
              } else {
                curOperatorData.properties.attribute.data.dataNum = targetNum;
                var NewArray = [];
                for (var i = 0; i < targetNum; i++) {
                  NewArray.push(curOperatorData.properties.attribute.data.dataArray[i]);
                }
                curOperatorData.properties.attribute.data.dataArray = NewArray;
              }
              $flowchart.flowchart('setOperatorData', curSelectedOperatorId, curOperatorData);
              $flowchart.flowchart('selectOperator', curSelectedOperatorId);
            })
            section_attribute.appendChild(selectList);
            section_attribute.appendChild(document.createElement("BR"));
            
            var dataArray = OperatorAttribute[key].dataArray;
            var arrayLength = OperatorAttribute[key].dataNum;
            console.log(OperatorAttribute[key])
            for (var i = 0; i < arrayLength; i++) {
              // key
              section_attribute.appendChild(document.createTextNode("\u00a0\u00a0\u00a0\u00a0"));
              section_attribute.appendChild(document.createTextNode("key"));
              var input = document.createElement("input");
              input.type = "text";
              input.name = "key";
              input.value = dataArray[i].key;
              (function () {
                var temp = i
                input.addEventListener("keyup", function(v) {
                  var curSelectedOperatorId = $flowchart.flowchart('getSelectedOperatorId');
                  var curOperatorData = $flowchart.flowchart('getOperatorData', curSelectedOperatorId);
                  curOperatorData.properties.attribute.data.dataArray[temp].key = v.target.value;
                  $flowchart.flowchart('setOperatorData', curSelectedOperatorId, curOperatorData);
                })
              }());
              section_attribute.appendChild(input);
              // value
              section_attribute.appendChild(document.createTextNode("\u00a0\u00a0\u00a0\u00a0"));
              section_attribute.appendChild(document.createTextNode("value"));
              var input = document.createElement("input");
              input.type = "text";
              input.name = "value";
              input.value = dataArray[i].value;
              (function () {
                var temp = i
                input.addEventListener("keyup", function(v) {
                  var curSelectedOperatorId = $flowchart.flowchart('getSelectedOperatorId');
                  var curOperatorData = $flowchart.flowchart('getOperatorData', curSelectedOperatorId);
                  curOperatorData.properties.attribute.data.dataArray[temp].value = v.target.value;
                  $flowchart.flowchart('setOperatorData', curSelectedOperatorId, curOperatorData);
                })
              }());
              section_attribute.appendChild(input);
              section_attribute.appendChild(document.createElement("BR"));
            }
          }
          // secret 's stringData
          if (typeof OperatorAttribute[key] === 'object' && key === 'stringData') {
            section_attribute.appendChild(document.createTextNode("stringData number"));
            var selectList = document.createElement("select");
            selectList.id = "stringData number";
            var selectArray = ["0", "1", "2", "3", "4", "5"];
            //Create and append the options
            for (var i = 0; i < selectArray.length; i++) {
              var option = document.createElement("option");
              option.value = selectArray[i];
              option.text = selectArray[i];
              if (OperatorAttribute[key].dataNum === parseInt(selectArray[i], 10)) {
                option.selected = "selected";
              }
              selectList.appendChild(option);
            }
            selectList.addEventListener("change", function(s) {
              var curSelectedOperatorId = $flowchart.flowchart('getSelectedOperatorId');
              var curOperatorData = $flowchart.flowchart('getOperatorData', curSelectedOperatorId);
              var oriNum = curOperatorData.properties.attribute.stringData.stringDataNum;
              var targetNum = parseInt(s.target.value, 10);
              if (oriNum < targetNum) {
                curOperatorData.properties.attribute.stringData.stringDataNum = targetNum;
                for (var i = 0; i < (targetNum - oriNum); i++) {
                  curOperatorData.properties.attribute.stringData.stringDataArray.push({
                    "key": "",
                    "value": "",
                  });
                }
              } else {
                curOperatorData.properties.attribute.stringData.stringDataNum = targetNum;
                var NewArray = [];
                for (var i = 0; i < targetNum; i++) {
                  NewArray.push(curOperatorData.properties.attribute.stringData.stringDataArray[i]);
                }
                curOperatorData.properties.attribute.stringData.stringDataArray = NewArray;
              }
              $flowchart.flowchart('setOperatorData', curSelectedOperatorId, curOperatorData);
              $flowchart.flowchart('selectOperator', curSelectedOperatorId);
            })
            section_attribute.appendChild(selectList);
            section_attribute.appendChild(document.createElement("BR"));
            
            var dataArray = OperatorAttribute[key].stringDataArray;
            var arrayLength = OperatorAttribute[key].stringDataNum;
            console.log(OperatorAttribute[key])
            for (var i = 0; i < arrayLength; i++) {
              // key
              section_attribute.appendChild(document.createTextNode("\u00a0\u00a0\u00a0\u00a0"));
              section_attribute.appendChild(document.createTextNode("key"));
              var input = document.createElement("input");
              input.type = "text";
              input.name = "key";
              input.value = dataArray[i].key;
              (function () {
                var temp = i
                input.addEventListener("keyup", function(v) {
                  var curSelectedOperatorId = $flowchart.flowchart('getSelectedOperatorId');
                  var curOperatorData = $flowchart.flowchart('getOperatorData', curSelectedOperatorId);
                  curOperatorData.properties.attribute.stringData.stringDataArray[temp].key = v.target.value;
                  $flowchart.flowchart('setOperatorData', curSelectedOperatorId, curOperatorData);
                })
              }());
              section_attribute.appendChild(input);
              // value
              section_attribute.appendChild(document.createTextNode("\u00a0\u00a0\u00a0\u00a0"));
              section_attribute.appendChild(document.createTextNode("value"));
              var input = document.createElement("input");
              input.type = "text";
              input.name = "value";
              input.value = dataArray[i].value;
              (function () {
                var temp = i
                input.addEventListener("keyup", function(v) {
                  var curSelectedOperatorId = $flowchart.flowchart('getSelectedOperatorId');
                  var curOperatorData = $flowchart.flowchart('getOperatorData', curSelectedOperatorId);
                  curOperatorData.properties.attribute.stringData.stringDataArray[temp].value = v.target.value;
                  $flowchart.flowchart('setOperatorData', curSelectedOperatorId, curOperatorData);
                })
              }());
              section_attribute.appendChild(input);
              section_attribute.appendChild(document.createElement("BR"));
            }
          }
        }
      }

      $operatorProperties.show();
      return true;
    },
    onOperatorUnselect: function() {
      $rightColumn.hide();
      $operatorProperties.hide();
      return true;
    },
    onLinkSelect: function(linkId) {
      $rightColumn.hide();
      $linkProperties.show();
      $linkColor.val($flowchart.flowchart('getLinkMainColor', linkId));
      return true;
    },
    onLinkUnselect: function() {
      $linkProperties.hide();
      return true;
    },
    onOperatorMoved: function(operatorId, position) {
      update_namespace();
      update_storageclass();
      var OperatorTitle = $flowchart.flowchart('getOperatorTitle', operatorId);
      var OperatorType = OperatorTitle.split(" ")[0];
      var OperatorData = $flowchart.flowchart('getOperatorData', operatorId);
    },
    // many to one
    multipleLinksOnInput: function() { 
      return true;
    }
  });

  // input / output Listener
  for (var i = 1; i <= 3; i++) {
    $operator_input['operator_input_' + i].keyup(function() {
      var selectedOperatorId = $flowchart.flowchart('getSelectedOperatorId');
      var OperatorType = $flowchart.flowchart('getOperatorTitle', selectedOperatorId).split(" ")[0];
      var OperatorData = $flowchart.flowchart('getOperatorData', selectedOperatorId);
      var OperatorLabel = OperatorData.properties.inputs[this.id.substring(9,)].label;
      var OperatorTrueType = OperatorLabel.split(" ")[0];
      var OperatorNewData = $operator_input[this.id].val();
      OperatorData.properties.inputs[this.id.substring(9,)].label = OperatorTrueType + " " + OperatorNewData;
      if (selectedOperatorId != null) {
        $flowchart.flowchart('setOperatorData', selectedOperatorId, OperatorData);
      }
    });
  }
  for (var i = 1; i <= 3; i++) {
    $operator_output['operator_output_' + i].keyup(function() {
      var selectedOperatorId = $flowchart.flowchart('getSelectedOperatorId');
      var OperatorType = $flowchart.flowchart('getOperatorTitle', selectedOperatorId).split(" ")[0];
      var OperatorData = $flowchart.flowchart('getOperatorData', selectedOperatorId);
      var OperatorLabel = OperatorData.properties.outputs[this.id.substring(9,)].label;
      var OperatorTrueType = OperatorLabel.split(" ")[0];
      var OperatorNewData = $operator_output[this.id].val();
      OperatorData.properties.outputs[this.id.substring(9,)].label = OperatorTrueType + " " + OperatorNewData;
      if (selectedOperatorId != null) {
        $flowchart.flowchart('setOperatorData', selectedOperatorId, OperatorData);
      }
    });
  }

  // key-value Listener
  for (var i = 1; i <= 3; i++) {
    $operator_key['operatorLabelKey' + i].keyup(function() {
      var selectedOperatorId = $flowchart.flowchart('getSelectedOperatorId');
      var OperatorData = $flowchart.flowchart('getOperatorData', selectedOperatorId);
      var OperatorKeyValue = OperatorData.properties['operatorLabelKeyValue' + this.id.substring(16,)];
      var NewKeyValue = {};
      if (Object.keys(OperatorKeyValue).length === 1) {
        var status = false;
        if ($operator_value['operatorLabelValue' + this.id.substring(16,)].val() === undefined) {
          status = true;
        } else if ($operator_value['operatorLabelValue' + this.id.substring(16,)].val() === "") {
          status = true;
        }
        if ($operator_key[this.id].val() === "" && status) {
          OperatorData.properties['operatorLabelKeyValue' + this.id.substring(16,)] = NewKeyValue;
          if (selectedOperatorId != null) {
            $flowchart.flowchart('setOperatorData', selectedOperatorId, OperatorData);
          }
        } else {
          NewKeyValue[$operator_key[this.id].val()] = OperatorKeyValue[Object.keys(OperatorKeyValue)[0]];
          OperatorData.properties['operatorLabelKeyValue' + this.id.substring(16,)] = NewKeyValue;
          if (selectedOperatorId != null) {
            $flowchart.flowchart('setOperatorData', selectedOperatorId, OperatorData);
          }
        }
      } else {
        NewKeyValue[$operator_key[this.id].val()] = ""
        OperatorData.properties['operatorLabelKeyValue' + this.id.substring(16,)] = NewKeyValue;
        if (selectedOperatorId != null) {
          $flowchart.flowchart('setOperatorData', selectedOperatorId, OperatorData);
        }
      }
    });
  }
  for (var i = 1; i <= 3; i++) {
    $operator_value['operatorLabelValue' + i].keyup(function() {
      var selectedOperatorId = $flowchart.flowchart('getSelectedOperatorId');
      var OperatorData = $flowchart.flowchart('getOperatorData', selectedOperatorId);
      var OperatorKeyValue = OperatorData.properties['operatorLabelKeyValue' + this.id.substring(18,)];
      var NewKeyValue = {};
      if (Object.keys(OperatorKeyValue).length === 1) {
        var status = false;
        if ($operator_key['operatorLabelKey' + this.id.substring(18,)].val() === undefined) {
          status = true;
        } else if ($operator_key['operatorLabelKey' + this.id.substring(18,)].val() === "") {
          status = true;
        }
        if ($operator_value[this.id].val() === "" && status) {
          OperatorData.properties['operatorLabelKeyValue' + this.id.substring(18,)] = NewKeyValue;
          if (selectedOperatorId != null) {
            $flowchart.flowchart('setOperatorData', selectedOperatorId, OperatorData);
          }
        } else {
          NewKeyValue[Object.keys(OperatorKeyValue)[0]] = $operator_value[this.id].val();
          OperatorData.properties['operatorLabelKeyValue' + this.id.substring(18,)] = NewKeyValue;
          if (selectedOperatorId != null) {
            $flowchart.flowchart('setOperatorData', selectedOperatorId, OperatorData);
          }
        }
      } else {
        console.log(OperatorData);
        NewKeyValue[""] = $operator_value[this.id].val()
        OperatorData.properties['operatorLabelKeyValue' + this.id.substring(18,)] = NewKeyValue;
        if (selectedOperatorId != null) {
          $flowchart.flowchart('setOperatorData', selectedOperatorId, OperatorData);
        }
      }
    });
  }

  // key-value Listener_ann
  for (var i = 1; i <= 3; i++) {
    $operator_key_ann['operatorLabelKey' + i + '_ann'].keyup(function() {
      var selectedOperatorId = $flowchart.flowchart('getSelectedOperatorId');
      var OperatorData = $flowchart.flowchart('getOperatorData', selectedOperatorId);
      var OperatorKeyValue_ann = OperatorData.properties['operatorLabelKeyValue' + this.id.substring(16,17) + '_ann'];
      var NewKeyValue_ann = {};
      if (Object.keys(OperatorKeyValue_ann).length === 1) {
        var status = false;
        if ($operator_value_ann['operatorLabelValue' + this.id.substring(16,17) + '_ann'].val() === undefined) {
          status = true;
        } else if ($operator_value_ann['operatorLabelValue' + this.id.substring(16,17) + '_ann'].val() === "") {
          status = true;
        }
        if ($operator_key_ann[this.id].val() === "" && status) {
          OperatorData.properties['operatorLabelKeyValue' + this.id.substring(16,17) + '_ann'] = NewKeyValue_ann;
          if (selectedOperatorId != null) {
            $flowchart.flowchart('setOperatorData', selectedOperatorId, OperatorData);
          }
        } else {
          NewKeyValue_ann[$operator_key_ann[this.id].val()] = OperatorKeyValue_ann[Object.keys(OperatorKeyValue_ann)[0]];
          OperatorData.properties['operatorLabelKeyValue' + this.id.substring(16,17) + '_ann'] = NewKeyValue_ann;
          if (selectedOperatorId != null) {
            $flowchart.flowchart('setOperatorData', selectedOperatorId, OperatorData);
          }
        }
      } else {
        NewKeyValue_ann[$operator_key_ann[this.id].val()] = ""
        OperatorData.properties['operatorLabelKeyValue' + this.id.substring(16,17) + '_ann'] = NewKeyValue_ann;
        if (selectedOperatorId != null) {
          $flowchart.flowchart('setOperatorData', selectedOperatorId, OperatorData);
        }
      }
    });
  }
  for (var i = 1; i <= 3; i++) {
    $operator_value_ann['operatorLabelValue' + i + '_ann'].keyup(function() {
      var selectedOperatorId = $flowchart.flowchart('getSelectedOperatorId');
      var OperatorData = $flowchart.flowchart('getOperatorData', selectedOperatorId);
      var OperatorKeyValue_ann = OperatorData.properties['operatorLabelKeyValue' + this.id.substring(18,19) + '_ann'];
      var NewKeyValue_ann = {};
      if (Object.keys(OperatorKeyValue_ann).length === 1) {
        var status = false;
        if ($operator_key_ann['operatorLabelKey' + this.id.substring(18,19) + '_ann'].val() === undefined) {
          status = true;
        } else if ($operator_key_ann['operatorLabelKey' + this.id.substring(18,19) + '_ann'].val() === "") {
          status = true;
        }
        if ($operator_value_ann[this.id].val() === "" && status) {
          OperatorData.properties['operatorLabelKeyValue' + this.id.substring(18,19) + '_ann'] = NewKeyValue_ann;
          if (selectedOperatorId != null) {
            $flowchart.flowchart('setOperatorData', selectedOperatorId, OperatorData);
          }
        } else {
          NewKeyValue_ann[Object.keys(OperatorKeyValue_ann)[0]] = $operator_value_ann[this.id].val();
          OperatorData.properties['operatorLabelKeyValue' + this.id.substring(18,19) + '_ann'] = NewKeyValue_ann;
          if (selectedOperatorId != null) {
            $flowchart.flowchart('setOperatorData', selectedOperatorId, OperatorData);
          }
        }
      } else {
        NewKeyValue_ann[""] = $operator_value_ann[this.id].val()
        OperatorData.properties['operatorLabelKeyValue' + this.id.substring(18,19) + '_ann'] = NewKeyValue_ann;
        if (selectedOperatorId != null) {
          $flowchart.flowchart('setOperatorData', selectedOperatorId, OperatorData);
        }
      }
    });
  }

  // namespace selector listener
  selectNamespaceLis.addEventListener("change", function() {
    var selectedOperatorId = $flowchart.flowchart('getSelectedOperatorId');
    var OperatorData = $flowchart.flowchart('getOperatorData', selectedOperatorId);
    var OperatorType = OperatorData.properties.title.split(" ")[0];
    if(selectNamespaceLis.value == "namespace" && OperatorType == "Namespace"){
      OperatorData.properties.class = "namespace";
    } else if (selectNamespaceLis.value == "mediumNamespace" && OperatorType == "Namespace") {
      OperatorData.properties.class = "mediumNamespace";
    } else if (selectNamespaceLis.value == "largeNamespace" && OperatorType == "Namespace") {
      OperatorData.properties.class = "largeNamespace";
    } else if(selectNamespaceLis.value == "storageclass" && OperatorType == "StorageClass"){
      OperatorData.properties.class = "storageclass";
    } else if (selectNamespaceLis.value == "mediumStorageclass" && OperatorType == "StorageClass") {
      OperatorData.properties.class = "mediumStorageclass";
    } else if (selectNamespaceLis.value == "largeStorageclass" && OperatorType == "StorageClass") {
      OperatorData.properties.class = "largeStorageclass";
    }
    $flowchart.flowchart('setOperatorData', selectedOperatorId, OperatorData);
  });

  // SIXTH: add listener to div place 
  
  $operatorTitle.keyup(function() {
    var selectedOperatorId = $flowchart.flowchart('getSelectedOperatorId');
    var OperatorType = $flowchart.flowchart('getOperatorTitle', selectedOperatorId).split(" ")[0];
    if (selectedOperatorId != null) {
      $flowchart.flowchart('setOperatorTitle', selectedOperatorId, OperatorType + " " + $operatorTitle.val());
    }
    if (OperatorType === "Namespace") {
      update_namespace();
    } 
    if (OperatorType === "StorageClass") {
      update_storageclass();
    }
  });
  
  $linkColor.change(function() {
    var selectedLinkId = $flowchart.flowchart('getSelectedLinkId');
    if (selectedLinkId != null) {
      $flowchart.flowchart('setLinkMainColor', selectedLinkId, $linkColor.val());
    }
  });

  $flowchart.parent().siblings('.delete_selected_button').click(function() {
    $rightColumn.hide();
    $flowchart.flowchart('deleteSelected');
  });
  
  var $draggableOperators = $('.draggable_operator');
  
  // FIRST: add new operator
  function getOperatorData($element) {
    var nbInputs = parseInt($element.data('nb-inputs'));
    var nbOutputs = parseInt($element.data('nb-outputs'));
    var data = {
      properties: {
        "operatorLabelKeyValue1": {},
        "operatorLabelKeyValue2": {},
        "operatorLabelKeyValue3": {},
        "operatorLabelKeyValue1_ann": {},
        "operatorLabelKeyValue2_ann": {},
        "operatorLabelKeyValue3_ann": {},
        namespace: "default",
        title: $element.text(),
        inputs: {},
        outputs: {},
        attribute: {}
      } 
    };
    // initialize input / output labels
    var OperatorTitle = data.properties.title;
    var OperatorInputLabel = "";
    var OperatorOutputLabel = "";
    var OperatorAttribute = {};
    if (OperatorTitle === 'Ingress') {
      OperatorInputLabel = "";
      OperatorOutputLabel = "REST";
      OperatorAttribute["tls_hosts"] = "";
    } else if (OperatorTitle === 'Service') {
      OperatorInputLabel = "svcPort";
      OperatorOutputLabel = "port";
      OperatorAttribute["type"] = "ClusterIP";
    } else if (OperatorTitle === 'Deployment') {
      OperatorInputLabel = "targetPort";
      OperatorOutputLabel = "pod";
      OperatorAttribute["replicas"] = "1";
    } else if (OperatorTitle === 'Pod') {
      OperatorInputLabel = "";
      OperatorOutputLabel = "container";
      OperatorAttribute["imagePullSecrets"] = "";
    } else if (OperatorTitle === 'Container') {
      OperatorInputLabel = "containerPort";
      OperatorOutputLabel = "image";
      OperatorAttribute["imagePullPolicy"] = "IfNotPresent";
      OperatorAttribute["env"] = {
        "envArray": [],
        "envNum": 0
      };
      OperatorAttribute["mountPath_1"] = "";
      OperatorAttribute["mountPath_2"] = "";
    } else if (OperatorTitle === "Namespace") {
      data.properties.class = "namespace"
    } else if (OperatorTitle === "Image") {
      OperatorInputLabel = "image";
      OperatorOutputLabel = "";
      OperatorAttribute["imageRepository"] = "";
      OperatorAttribute["imageTag"] = "";
    } else if (OperatorTitle === "Secret") {
      OperatorAttribute["type"] = "";
      OperatorAttribute["data"] = {
        "dataArray": [],
        "dataNum": 0
      };
      OperatorAttribute["stringData"] = {
        "stringDataArray": [],
        "stringDataNum": 0
      };
    } else if (OperatorTitle === "ConfigMap") {
      OperatorAttribute["data"] = {
        "dataArray": [],
        "dataNum": 0
      };
    } else if (OperatorTitle === "AzureKeyVaultSecret") {
      OperatorAttribute["vaultName"] = "";
      OperatorAttribute["vaultObjectName"] = "";
      OperatorAttribute["vaultObjectType"] = "";
      OperatorAttribute["outputSecretName"] = "";
      OperatorAttribute["outputSecretDataKey"] = "";
    } else if (OperatorTitle === "Certificate") {
      OperatorAttribute["certHost"] = "";
    } else if (OperatorTitle === "ClusterIssuer") {
      OperatorAttribute["email"] = "";
    } else if (OperatorTitle === "PersistentVolumeClaim") {
      OperatorAttribute["request_storage"] = "";
      OperatorAttribute["accessModes"] = "";
      data.properties.storageclass = "manual";
    } else if (OperatorTitle === "PersistentVolume") {
      OperatorAttribute["capacity_storage"] = "";
      OperatorAttribute["accessModes"] = "";
      OperatorAttribute["hostPath"] = "";
      OperatorAttribute["persistentVolumeReclaimPolicy"] = "";
      data.properties.storageclass = "manual";
    } else if (OperatorTitle === "StorageClass") {
      data.properties.class = "storageclass"
    }
    var i = 0;
    for (i = 1; i <= nbInputs; i++) {
      data.properties.inputs['input_' + i] = {
        label: OperatorInputLabel,
        labels: {},
      };
    }
    for (i = 1; i <= nbOutputs; i++) {
      data.properties.outputs['output_' + i] = {
        label: OperatorOutputLabel,
        labels: {}
      };
    }
    for (i = 1; i <= nbOutputs; i++) {
      data.properties['output_' + i] = {
        label: OperatorOutputLabel,
        labels: {}
      };
    }
    data.properties.attribute = OperatorAttribute;
    return data;
  }
  
  var operatorId = 0;
  console.log($draggableOperators);
  $draggableOperators.draggable({
    cursor: "move",
    opacity: 0.7,
    
    helper: 'clone', 
    appendTo: 'body',
    zIndex: 1000,
    
    helper: function(e) {
      var $this = $(this);
      var data = getOperatorData($this);
      return $flowchart.flowchart('getOperatorElement', data);
    },
    stop: function(e, ui) {
      var $this = $(this);
      var elOffset = ui.offset;
      var containerOffset = $container.offset();
      if (elOffset.left > containerOffset.left &&
        elOffset.top > containerOffset.top && 
        elOffset.left < containerOffset.left + $container.width() &&
        elOffset.top < containerOffset.top + $container.height()) {

        var flowchartOffset = $flowchart.offset();

        var relativeLeft = elOffset.left - flowchartOffset.left;
        var relativeTop = elOffset.top - flowchartOffset.top;

        var positionRatio = $flowchart.flowchart('getPositionRatio');
        relativeLeft /= positionRatio;
        relativeTop /= positionRatio;
        
        var data = getOperatorData($this);
        data.left = relativeLeft;
        data.top = relativeTop;

        if (data.properties.title.split(" ")[0] === "Container" || data.properties.title.split(" ")[0] === "Pod") {
          for (var i = 1; i <= 2; i++) {
            data.properties.outputs["mount_" + i] = {};
            data.properties.outputs["mount_" + i]["isMount"] = true;
            data.properties.outputs["mount_" + i]["label"] = "";
            if (i === 1) {
              data.properties.outputs["mount_" + i]["label"] = "mount";
            }
          }
        }

        $flowchart.flowchart('addOperator', data);
      }
    }
  });

  // yaml template for different resources
  var yamlTemplate = {};
  yamlTemplate['Ingress'] = jsyaml.load('apiVersion: extensions/v1beta1\nkind: Ingress\nmetadata:\n  name:\n  labels: {}\n  annotations:\n    certmanager.k8s.io/cluster-issuer: letsencrypt-prod\n    kubernetes.io/ingress.class: nginx\n    nginx.ingress.kubernetes.io/proxy-body-size: 100m\n    nginx.ingress.kubernetes.io/rewrite-target: /$1\nspec:\n  tls:\n    - hosts: []\n      secretName: tls-secret\n  rules:\n    - host:\n      http:\n        paths: []');
  yamlTemplate['Service'] = jsyaml.load('apiVersion: v1\nkind: Service\nmetadata:\n  name:\n  labels: {}\n  annotations: {}\nspec:\n  type:\n  ports: []\n  selector: {}');
  yamlTemplate['Deployment'] = jsyaml.load('apiVersion: extensions/v1beta1\nkind: Deployment\nmetadata:\n  name:\n  labels: {}\n  annotations: {}\nspec:\n  replicas: 1\n  selector:\n    matchLabels: {}\n  template:\n    metadata:\n      labels: {}\n      annotations: {}\n    spec:\n      imagePullSecrets: []\n      containers: []\n      nodeSelector: {}\n      affinity: {}\n      tolerations: []\n      volumes: []\n');
  yamlTemplate['Secret'] = jsyaml.load('apiVersion: v1\ndata: {}\nstringData: {}\nkind: Secret\nmetadata:\n  labels: {}\n  annotations: {}\n  name: ""\n  namespace: ""\ntype: ""');
  yamlTemplate['ConfigMap'] = jsyaml.load('apiVersion: v1\ndata: {}\nkind: ConfigMap\nmetadata:\n  labels: {}\n  annotations: {}\n  name: ""\n  namespace: ""');
  yamlTemplate['AzureKeyVaultSecret'] = jsyaml.load('apiVersion: spv.no/v1alpha1\nkind: AzureKeyVaultSecret\nmetadata:\n  name: ""\n  namespace: ""\n  labels: {}\n  annotations: {}\nspec:\n  vault:\n    name: ""\n    object:\n      name: ""\n      type: ""\n  output:\n    secret: \n      name: ""\n      dataKey: ""');
  yamlTemplate['ClusterIssuer'] = jsyaml.load('apiVersion: certmanager.k8s.io/v1alpha1\nkind: ClusterIssuer\nmetadata:\n  name: letsencrypt-prod\nspec:\n  acme:\n    server: https://acme-v02.api.letsencrypt.org/directory\n    email: ""\n    privateKeySecretRef:\n      name: letsencrypt-prod\n    http01: {}');
  yamlTemplate['Certificate'] = jsyaml.load('apiVersion: certmanager.k8s.io/v1alpha1\nkind: Certificate\nmetadata:\n  name: tls-secret\nspec:\n  secretName: tls-secret\n  dnsNames: []\n  acme:\n    config:\n    - http01:\n        ingressClass: nginx\n      domains: []\n  issuerRef:\n    name: letsencrypt-prod\n    kind: ClusterIssuer\n');
  yamlTemplate['PersistentVolumeClaim'] = jsyaml.load('kind: PersistentVolumeClaim\napiVersion: v1\nmetadata:\n  name: \nspec:\n  storageClassName: \n  accessModes: []\n  resources:\n    requests:\n      storage:');
  yamlTemplate['PersistentVolume'] = jsyaml.load('kind: PersistentVolume\napiVersion: v1\nmetadata:\n  name: example-pv\n  labels:\n    type: local\nspec:\n  persistentVolumeReclaimPolicy:\n  storageClassName:\n  capacity:\n    storage:\n  accessModes: []\n  hostPath:\n    path:');
  yamlTemplate['Namespace'] = jsyaml.load('kind: Namespace\napiVersion: v1\nmetadata:\n  name: test');

  function templateGen() {
    // parse data and generate values.yaml
    var allData = $flowchart.flowchart('getData');
    var links = allData['links'];
    let operators = JSON.parse(JSON.stringify(allData['operators']));

    // loop through links
    for (var key in links) {
      var FromOperator = links[key].fromOperator;
      var FromConnector = links[key].fromConnector;
      var ToOperator = links[key].toOperator;
      var ToConnector = links[key].toConnector;
      operators[FromOperator].properties.outputs[FromConnector].toOperator = ToOperator;
      operators[FromOperator].properties.outputs[FromConnector].toConnector = ToConnector;
    }

    // SEVENTH: render to yaml
    // collect info for each object by looping through operators
    // apply template to each objects
    var template = {};
    for (var key in operators) {
      var operator = operators[key];
      var operatorProperties = operator.properties;
      var operatorType = operatorProperties.title.split(" ")[0];
      var operatorTitle = operatorProperties.title.split(" ")[1];
      
      // will not go from there
      if (operatorType === undefined || operatorType === "Container" || operatorType === "Pod" || operatorType === "Image" || operatorType === "Volume" || operatorType === "StorageClass") {
        continue;
      }

      // test for name
      if ((operatorTitle === undefined || operatorTitle === "") && (operatorType !== "ClusterIssuer" && operatorType !== "Certificate")) {
        alert('name empty: ' + operatorType + '\'s name is empty');
        return;
      }

      // deal with non-namespaced resource here
      if (operatorType === "Namespace") {
        let objectYaml = JSON.parse(JSON.stringify(yamlTemplate[operatorType]));
        objectYaml["metadata"]["name"] = operatorTitle;
        template[key] = {};
        template[key].yaml = objectYaml;
        continue;
      }

      // test for namespace
      if (operatorProperties.namespace === undefined || operatorProperties.namespace === "") {
        alert('namespace empty: ' + operatorType + ' ' + operatorTitle + '\'s namespace is empty');
        return;
      }

      template[key] = {};
      template[key].operator = operator; 
      template[key].type = operatorType;
        
      // yaml
      let objectYaml = JSON.parse(JSON.stringify(yamlTemplate[operatorType]));
      objectYaml["metadata"]["namespace"] = operatorProperties.namespace;
      
      for (var i = 1; i <= 3; i++) {
        var OperatorKeyValue = operatorProperties['operatorLabelKeyValue' + i];
        if (Object.keys(OperatorKeyValue).length === 1) {   
          // test for label key
          if (Object.keys(OperatorKeyValue)[0] === undefined || Object.keys(OperatorKeyValue)[0] === "") {
            alert('label key empty: ' + operatorType +  ' ' + operatorTitle + '\'s key is empty');
            return;
          }
          
          // test for label value
          if (OperatorKeyValue[Object.keys(OperatorKeyValue)[0]] === undefined || OperatorKeyValue[Object.keys(OperatorKeyValue)[0]] === "") {
            alert('label value empty: ' + operatorType + ' ' + operatorTitle + '\'s value is empty');
            return;
          }
          
          objectYaml["metadata"]["labels"][Object.keys(OperatorKeyValue)[0]] = OperatorKeyValue[Object.keys(OperatorKeyValue)[0]];
        }
      }
      for (var i = 1; i <= 3; i++) {
        var OperatorKeyValue = operatorProperties['operatorLabelKeyValue' + i + '_ann'];
        if (Object.keys(OperatorKeyValue).length === 1) {
          // test for annotation key
          if (Object.keys(OperatorKeyValue)[0] === undefined || Object.keys(OperatorKeyValue)[0] === "") {
            alert('annotation key empty: ' + operatorType +  ' ' + operatorTitle + '\'s key is empty');
            return;
          }
          
          // test for annotation value
          if (OperatorKeyValue[Object.keys(OperatorKeyValue)[0]] === undefined || OperatorKeyValue[Object.keys(OperatorKeyValue)[0]] === "") {
            alert('annotation value empty: ' + operatorType + ' ' + operatorTitle + '\'s value is empty');
            return;
          }

          objectYaml["metadata"]["annotations"][Object.keys(OperatorKeyValue)[0]] = OperatorKeyValue[Object.keys(OperatorKeyValue)[0]];
        }
      }
      if (operatorType === "Ingress") {
        objectYaml["metadata"]["name"] = operatorTitle;
        
        // test for tls_hosts
        if (operatorProperties.attribute.tls_hosts === "") {
          alert('tls_hosts empty: ' + operatorType + ' ' + operatorTitle + '\'s tls_hosts is empty');
          return;
        }

        objectYaml["spec"]["tls"][0]["hosts"].push(operatorProperties.attribute.tls_hosts);
        objectYaml["spec"]["rules"][0]["host"] = operatorProperties.attribute.tls_hosts;
        for (var i = 1; i <= 3; i++) {
          var outputsLink = operatorProperties.outputs["output_" + i];
          if (("toOperator" in outputsLink) && ("toConnector" in outputsLink)) {
            var ToOperator = outputsLink.toOperator;
            var ToConnector = outputsLink.toConnector;
            var targetOperator = operators[ToOperator];
            var targetOperatorProperties = targetOperator.properties;
            var targetOperatorType = targetOperatorProperties.title.split(" ")[0];
            var targetOperatorTitle = targetOperatorProperties.title.split(" ")[1];
            
            // check type
            if (!(targetOperatorType === "Service")) {
              alert('Type Error: Ingress -> Service');
              return;
            }
            
            var targetInput = targetOperatorProperties.inputs[ToConnector];
            var targetPort = targetInput.label.split(" ")[1];
            var sourcePath = outputsLink.label.split(" ")[1];
            
            // test for path
            if (sourcePath === undefined || sourcePath === "") {
              alert('connected ingress path empty: ' + operatorType + ' ' + operatorTitle + '\'s path is empty');
              return;
            }

            // test for targetTitle
            if (targetOperatorTitle === undefined || targetOperatorTitle === "") {
              alert('name empty: ' + targetOperatorType + '\'s name is empty');
              return;
            }

            // test for targetPort
            if (targetPort === undefined || targetPort === "") {
              alert('connected service svcPort empty: ' + targetOperatorType + ' ' + targetOperatorTitle + '\'s svcPort is empty');
              return;
            }

            // backend object
            var httpObject = {};
            httpObject["path"] = sourcePath;
            httpObject["backend"] = {};
            httpObject["backend"]["serviceName"] = targetOperatorTitle;
            httpObject["backend"]["servicePort"] = parseInt(targetPort, 10);
            objectYaml["spec"]["rules"][0]["http"]["paths"].push(httpObject);
          } 
        }
      } else if (operatorType === "Service") {
        objectYaml["metadata"]["name"] = operatorTitle;
        
        // test for service type
        if (operatorProperties.attribute.type === undefined || operatorProperties.attribute.type === "") {
          alert('service type empty: ' + operatorType + ' ' + operatorTitle + '\'s type is empty');
          return;
        }

        objectYaml["spec"]["type"] = operatorProperties.attribute.type;
        
        for (var i = 1; i <= 3; i++) {
          var outputsLink = operatorProperties.outputs["output_" + i];
          if (("toOperator" in outputsLink) && ("toConnector" in outputsLink)) {
            var ToOperator = outputsLink.toOperator;
            var ToConnector = outputsLink.toConnector;
            var targetOperator = operators[ToOperator];
            var targetOperatorProperties = targetOperator.properties;
            var targetOperatorType = targetOperatorProperties.title.split(" ")[0];
            var targetOperatorTitle = targetOperatorProperties.title.split(" ")[1];
            
            // check type
            if (!(targetOperatorType === "Deployment")) {
              alert('Type Error: Service -> Deployment');
              return;
            }
            
            var targetInput = targetOperatorProperties.inputs[ToConnector];
            var targetPort = targetInput.label.split(" ")[1];      
            var sourcePath = outputsLink.label.split(" ")[1];

            // test for path
            if (sourcePath === undefined || sourcePath === "") {
              alert('connected Service port empty: ' + operatorType + ' ' + operatorTitle + '\'s port is empty');
              return;
            }

            // test for targetTitle
            if (targetOperatorTitle === undefined || targetOperatorTitle === "") {
              alert('name empty: ' + targetOperatorType + '\'s name is empty');
              return;
            }

            // test for targetPort
            if (targetPort === undefined || targetPort === "") {
              alert('connected deployment targetPort empty: ' + targetOperatorType + ' ' + targetOperatorTitle + '\'s targetPort is empty');
              return;
            }

            // port object
            var portObject = {};
            portObject["port"] = parseInt(sourcePath, 10);
            portObject["targetPort"] = parseInt(targetPort, 10);
            objectYaml["spec"]["ports"].push(portObject);
            
            // selector object
            var selectorObject = {};
            selectorObject["deploymentName"] = targetOperatorTitle;
            objectYaml["spec"]["selector"] = selectorObject;
          }
        }
      } else if (operatorType === "Deployment") {
        objectYaml["metadata"]["name"] = operatorTitle;
        objectYaml["metadata"]["labels"]["deploymentName"] = operatorTitle;
        
        // test for replica number
        if (operatorProperties.attribute.replicas === undefined || operatorProperties.attribute.replicas === "") {
          alert('replicas empty: ' + operatorType + ' ' + operatorTitle + '\'s replica number is empty');
          return;
        }

        objectYaml["spec"]["replicas"] = parseInt(operatorProperties.attribute.replicas, 10);
        
        var outputsLink = operatorProperties.outputs["output_1"];
        if (("toOperator" in outputsLink) && ("toConnector" in outputsLink)) {
          var ToOperator = outputsLink.toOperator;
          var ToConnector = outputsLink.toConnector;
          var targetOperator = operators[ToOperator];
          var targetOperatorProperties = targetOperator.properties;
          var targetOperatorType = targetOperatorProperties.title.split(" ")[0];
          var targetOperatorTitle = targetOperatorProperties.title.split(" ")[1];
          
          // check type
          if (!(targetOperatorType === "Pod")) {
            alert('Type Error: Deployment -> Pod');
            return;
          }

          // test for targetTitle
          if (targetOperatorTitle === undefined || targetOperatorTitle === "") {
            alert('name empty: ' + targetOperatorType + '\'s name is empty');
            return;
          }

          // match label
          objectYaml["spec"]["selector"]["matchLabels"]["deploymentName"] = operatorTitle;
          objectYaml["spec"]["template"]["metadata"]["labels"]["deploymentName"] = operatorTitle;

          // Pod labels
          for (var i = 1; i <= 3; i++) {
            var OperatorKeyValue = targetOperatorProperties['operatorLabelKeyValue' + i];
            if (Object.keys(OperatorKeyValue).length === 1) {   
              // test for label key
              if (Object.keys(OperatorKeyValue)[0] === undefined || Object.keys(OperatorKeyValue)[0] === "") {
                alert('label key empty: ' + targetOperatorType +  ' ' + targetOperatorTitle + '\'s key is empty');
                return;
              }
              
              // test for label value
              if (OperatorKeyValue[Object.keys(OperatorKeyValue)[0]] === undefined || OperatorKeyValue[Object.keys(OperatorKeyValue)[0]] === "") {
                alert('label value empty: ' + targetOperatorType + ' ' + targetOperatorTitle + '\'s value is empty');
                return;
              }
              
              objectYaml["spec"]["template"]["metadata"]["labels"][Object.keys(OperatorKeyValue)[0]] = OperatorKeyValue[Object.keys(OperatorKeyValue)[0]];
            }
          }
          for (var i = 1; i <= 3; i++) {
            var OperatorKeyValue = targetOperatorProperties['operatorLabelKeyValue' + i + '_ann'];
            if (Object.keys(OperatorKeyValue).length === 1) {
              // test for annotation key
              if (Object.keys(OperatorKeyValue)[0] === undefined || Object.keys(OperatorKeyValue)[0] === "") {
                alert('annotation key empty: ' + targetOperatorType +  ' ' + targetOperatorTitle + '\'s key is empty');
                return;
              }
              
              // test for annotation value
              if (OperatorKeyValue[Object.keys(OperatorKeyValue)[0]] === undefined || OperatorKeyValue[Object.keys(OperatorKeyValue)[0]] === "") {
                alert('annotation value empty: ' + targetOperatorType + ' ' + targetOperatorTitle + '\'s value is empty');
                return;
              }

              objectYaml["spec"]["template"]["metadata"]["annotations"][Object.keys(OperatorKeyValue)[0]] = OperatorKeyValue[Object.keys(OperatorKeyValue)[0]];
            }
          }
          
          // Pod secrets
          if (!(targetOperatorProperties.attribute["imagePullSecrets"] === "")) {
            var secretNameObject = {};
            secretNameObject["name"] = targetOperatorProperties.attribute["imagePullSecrets"];
            objectYaml["spec"]["template"]["spec"]["imagePullSecrets"].push(secretNameObject);
          }

          // Pod Volumes
          for (var i = 1; i <= 2; i++) {
            var podMountLink = targetOperatorProperties.outputs["mount_" + i];
            if (("toOperator" in podMountLink) && ("toConnector" in podMountLink)) {
              var volumeToOperator = podMountLink.toOperator;
              var volumeToConnector = podMountLink.toConnector;
              var volumeTargetOperator = operators[volumeToOperator];
              var volumeTargetOperatorProperties = volumeTargetOperator.properties;
              var volumeTargetOperatorType = volumeTargetOperatorProperties.title.split(" ")[0];
              var volumeTargetOperatorTitle = volumeTargetOperatorProperties.title.split(" ")[1];
              
              // test for correct type
              if (volumeTargetOperatorType !== "Volume") {
                alert('Type Error: Pod mount -> volume');
              }

              // test for volume title
              if (volumeTargetOperatorTitle === undefined || volumeTargetOperatorTitle === "") {
                alert('volume name empty: ' + volumeTargetOperatorType + '\'s name is empty');
                return;
              }

              var volumeOutputLink = volumeTargetOperatorProperties.outputs["output_1"];
              if (("toOperator" in volumeOutputLink) && ("toConnector" in volumeOutputLink)) {
                var volumeMountToOperator = volumeOutputLink.toOperator;
                var volumeMountToConnector = volumeOutputLink.toConnector;
                var volumeMountTargetOperator = operators[volumeMountToOperator];
                var volumeMountTargetOperatorProperties = volumeMountTargetOperator.properties;
                var volumeMountTargetOperatorType = volumeMountTargetOperatorProperties.title.split(" ")[0];
                var volumeMountTargetOperatorTitle = volumeMountTargetOperatorProperties.title.split(" ")[1];
                
                if (volumeMountTargetOperatorType === "Secret") {
                  var volumeObject = {};
                  volumeObject["name"] = volumeTargetOperatorTitle;
                  volumeObject["secret"] = {};
                  volumeObject["secret"]["secretName"] = volumeMountTargetOperatorTitle;
                  objectYaml["spec"]["template"]["spec"]["volumes"].push(volumeObject);
                } else if (volumeMountTargetOperatorType === "ConfigMap") {
                  var volumeObject = {};
                  volumeObject["name"] = volumeTargetOperatorTitle;
                  volumeObject["configMap"] = {};
                  volumeObject["configMap"]["name"] = volumeMountTargetOperatorTitle;
                  objectYaml["spec"]["template"]["spec"]["volumes"].push(volumeObject);
                } else if (volumeMountTargetOperatorType === "PersistentVolumeClaim") {
                  var volumeObject = {};
                  volumeObject["name"] = volumeTargetOperatorTitle;
                  volumeObject["persistentVolumeClaim"] = {};
                  volumeObject["persistentVolumeClaim"]["claimName"] = volumeMountTargetOperatorTitle;
                  objectYaml["spec"]["template"]["spec"]["volumes"].push(volumeObject);
                }
              } else {
                // test for volume output
                alert('volume output empty: ' + volumeTargetOperatorType + ' ' + volumeTargetOperatorTitle + '\' should connect with secret, configMap, or pvc');
                return;
              }
            }
          }

          // dive into container
          for (var i = 1; i <= 3; i++) {
            var podOutputsLink = targetOperatorProperties.outputs["output_" + i];
            if (("toOperator" in podOutputsLink) && ("toConnector" in podOutputsLink)) {
              var containerToOperator = podOutputsLink.toOperator;
              var containerToConnector = podOutputsLink.toConnector;
              var containerTargetOperator = operators[containerToOperator];
              var containerTargetOperatorProperties = containerTargetOperator.properties;
              var containerTargetOperatorType = containerTargetOperatorProperties.title.split(" ")[0];
              var containerTargetOperatorTitle = containerTargetOperatorProperties.title.split(" ")[1];
              
              // check type
              if (!(containerTargetOperatorType === "Container")) {
                alert('Type Error: Pod -> Container');
                return;
              }

              // test for targetTitle
              if (containerTargetOperatorTitle === undefined || containerTargetOperatorTitle === "") {
                alert('name empty: ' + containerTargetOperatorType + '\'s name is empty');
                return;
              }

              // initialize container object
              var containerAllObject = {};
              containerAllObject["ports"] = [];
              containerAllObject["env"] = [];
              containerAllObject["image"] = "";
              containerAllObject["name"] = containerTargetOperatorTitle;
              if (!(containerTargetOperatorProperties.attribute.imagePullPolicy === "")) {
                containerAllObject["imagePullPolicy"] = containerTargetOperatorProperties.attribute.imagePullPolicy;
              }

              // expose all port
              for (var j = 1; j <= 3; j++) {
                var containerInputLinkLabel = containerTargetOperatorProperties.inputs["input_" + j].label;
                var containerInputLinkPort = containerInputLinkLabel.split(" ")[1];
                if (!(containerInputLinkPort === "")) {
                  var containerInputPortObject = {};
                  containerInputPortObject["containerPort"] = parseInt(containerInputLinkPort, 10);
                  containerAllObject["ports"].push(containerInputPortObject);
                }
              }

              // environment variable
              var containerEnv = containerTargetOperatorProperties.attribute.env;
              for (var j = 0; j < containerEnv.envNum; j++) {
                var containerEnvObject = {};
                if (containerEnv.envArray[j].mode === "secret") {
                  var containerEnvName = containerEnv.envArray[j].name;
                  var containerSecretName = containerEnv.envArray[j].secretName;
                  var containerSecretKey = containerEnv.envArray[j].secretKey;
                  if (containerSecretName !== "" && containerSecretKey !== "") {
                    containerEnvObject["name"] = containerEnvName;
                    containerEnvObject["valueFrom"] = {};
                    containerEnvObject["valueFrom"]["secretKeyRef"] = {};
                    containerEnvObject["valueFrom"]["secretKeyRef"]["name"] = containerSecretName;
                    containerEnvObject["valueFrom"]["secretKeyRef"]["key"] = containerSecretKey;
                    containerAllObject["env"].push(containerEnvObject);
                  }
                } else if (containerEnv.envArray[j].mode === "env") {
                  var containerEnvName = containerEnv.envArray[j].name;
                  var containerEnvValue = containerEnv.envArray[j].value;
                  if (containerEnvName !== "" && containerEnvValue !== "") {
                    containerEnvObject["name"] = containerEnvName;
                    containerEnvObject["value"] = containerEnvValue;
                    containerAllObject["env"].push(containerEnvObject);
                  }
                } else if (containerEnv.envArray[j].mode === "configMap") {
                  var containerEnvName = containerEnv.envArray[j].name;
                  var containerConfigMapName = containerEnv.envArray[j].configMapName;
                  var containerConfigMapKey = containerEnv.envArray[j].configMapKey;
                  if (containerConfigMapName !== "" && containerConfigMapKey !== "") {
                    containerEnvObject["name"] = containerEnvName;
                    containerEnvObject["valueFrom"] = {};
                    containerEnvObject["valueFrom"]["configMapKeyRef"] = {};
                    containerEnvObject["valueFrom"]["configMapKeyRef"]["name"] = containerConfigMapName;
                    containerEnvObject["valueFrom"]["configMapKeyRef"]["key"] = containerConfigMapKey;
                    containerAllObject["env"].push(containerEnvObject);
                  }
                } 
              }

              // image for container
              var containerOutputLink = containerTargetOperatorProperties.outputs["output_1"];
              if (("toOperator" in containerOutputLink) && ("toConnector" in containerOutputLink)) {
                var ImageToOperator = containerOutputLink.toOperator;
                var ImageToConnector = containerOutputLink.toConnector;
                var ImageTargetOperator = operators[ImageToOperator];
                var ImageTargetOperatorProperties = ImageTargetOperator.properties;
                var ImageTargetOperatorType = ImageTargetOperatorProperties.title.split(" ")[0];
                var ImageTargetOperatorTitle = ImageTargetOperatorProperties.title.split(" ")[1];
                var ImageTargetRepository = ImageTargetOperatorProperties.attribute.imageRepository;
                var ImageTargetTag = ImageTargetOperatorProperties.attribute.imageTag;

                // test image repository
                if (ImageTargetRepository === undefined || ImageTargetRepository === "") {
                  alert("Image targetRepository is empty");
                  return;
                }

                // test image tag
                if (ImageTargetTag === undefined || ImageTargetTag === "") {
                  alert("Image targetTag is empty");
                  return;
                }

                containerAllObject["image"] = ImageTargetRepository + ":" + ImageTargetTag;
              }

              // volumes for container
              containerAllObject["volumeMounts"] = []
              for (var j = 1; j <= 2; j++) {
                var tempNumber = (3-j);
                var containerMountLink = containerTargetOperatorProperties.outputs["mount_" + j];
                if (("toOperator" in containerMountLink) && ("toConnector" in containerMountLink)) {
                  var containerMountPath = containerTargetOperatorProperties.attribute["mountPath_"+j]; 
                  var containerVolumeMountOperator = containerMountLink.toOperator;
                  var containerVolumeMountConnector = containerMountLink.toConnector;
                  var containerVolumeMountTargetOperator = operators[containerVolumeMountOperator];
                  var containerVolumeMountTargetOperatorProperties = containerVolumeMountTargetOperator.properties;
                  var containerVolumeMountTargetOperatorType = containerVolumeMountTargetOperatorProperties.title.split(" ")[0];
                  var containerVolumeMountTargetOperatorTitle = containerVolumeMountTargetOperatorProperties.title.split(" ")[1];
                  
                  // test for volume title
                  if (containerVolumeMountTargetOperatorTitle === undefined || containerVolumeMountTargetOperatorTitle === "") {
                    alert('volume name empty: ' + containerVolumeMountTargetOperatorTitle + '\'s name is empty');
                    return;
                  }

                  // test for path
                  if (containerMountPath === undefined || containerMountPath === "") {
                    alert('mount path empty: ' + containerVolumeMountTargetOperatorTitle + '\'s path is empty');
                    return;
                  }

                  var volumeOutputLink = containerVolumeMountTargetOperatorProperties.outputs["output_1"];
                  if (("toOperator" in volumeOutputLink) && ("toConnector" in volumeOutputLink)) {
                    var volumeMountToOperator = volumeOutputLink.toOperator;
                    var volumeMountToConnector = volumeOutputLink.toConnector;
                    var volumeMountTargetOperator = operators[volumeMountToOperator];
                    var volumeMountTargetOperatorProperties = volumeMountTargetOperator.properties;
                    var volumeMountTargetOperatorType = volumeMountTargetOperatorProperties.title.split(" ")[0];
                    var volumeMountTargetOperatorTitle = volumeMountTargetOperatorProperties.title.split(" ")[1];
                    
                    var volumeObject = {};
                    volumeObject["mountPath"] = containerMountPath;
                    volumeObject["name"] = volumeMountTargetOperatorTitle;
                    containerAllObject["volumeMounts"].push(volumeObject);
                  } else {
                    // test for volume output
                    alert('volume output empty: ' + volumeTargetOperatorType + ' ' + volumeTargetOperatorTitle + '\' should connect with secret, configMap, or pvc');
                    return;
                  }
                }
              }

              objectYaml["spec"]["template"]["spec"]["containers"].push(containerAllObject);
            }

          }
        }
      } else if (operatorType === "Secret") {
        objectYaml["metadata"]["name"] = operatorTitle;

        // test for secret type
        if (operatorProperties.attribute.type === undefined || operatorProperties.attribute.type === "") {
          alert('secret type empty: ' + operatorType + ' ' + operatorTitle + '\'s type is empty');
          return;
        }

        objectYaml["type"] = operatorProperties.attribute.type;

        // secret's data
        var dataArray = operatorProperties.attribute.data.dataArray;
        var arrayNum = operatorProperties.attribute.data.dataNum;
        for (var i = 0; i < arrayNum; i++) {
          // test for secret data key
          if (dataArray[i].key === "" || dataArray[i].key === undefined) {
            alert('secret data\'s key empty: ' + operatorType + ' ' + operatorTitle + '\'s data key is empty');
            return;
          } 

          // test for secret data value
          if (dataArray[i].value === "" || dataArray[i].value === undefined) {
            alert('secret data\'s value empty: ' + operatorType + ' ' + operatorTitle + '\'s data value is empty');
            return;
          } 

          objectYaml["data"][dataArray[i].key] = dataArray[i].value;
        }

        // secret's stringData
        var dataArray = operatorProperties.attribute.stringData.stringDataArray;
        var arrayNum = operatorProperties.attribute.stringData.stringDataNum;
        for (var i = 0; i < arrayNum; i++) {
          // test for secret string data key
          if (dataArray[i].key === "" || dataArray[i].key === undefined) {
            alert('secret string data\'s key empty: ' + operatorType + ' ' + operatorTitle + '\'s string data key is empty');
            return;
          } 

          // test for secret data value
          if (dataArray[i].value === "" || dataArray[i].value === undefined) {
            alert('secret string data\'s value empty: ' + operatorType + ' ' + operatorTitle + '\'s string data value is empty');
            return;
          } 

          objectYaml["stringData"][dataArray[i].key] = dataArray[i].value;
        }
      } else if (operatorType === "ConfigMap") {
        objectYaml["metadata"]["name"] = operatorTitle;

        // configmap's data
        var dataArray = operatorProperties.attribute.data.dataArray;
        var arrayNum = operatorProperties.attribute.data.dataNum;
        for (var i = 0; i < arrayNum; i++) {
          // test for configmap data key
          if (dataArray[i].key === "" || dataArray[i].key === undefined) {
            alert('configmap data\'s key empty: ' + operatorType + ' ' + operatorTitle + '\'s data key is empty');
            return;
          } 

          // test for configmap data value
          if (dataArray[i].value === "" || dataArray[i].value === undefined) {
            alert('configmap data\'s value empty: ' + operatorType + ' ' + operatorTitle + '\'s data value is empty');
            return;
          } 

          objectYaml["data"][dataArray[i].key] = dataArray[i].value;
        }
      } else if (operatorType === "AzureKeyVaultSecret") {
        objectYaml["metadata"]["name"] = operatorTitle;

        // test for vaultName
        var vaultName = operatorProperties.attribute.vaultName;
        if (vaultName === undefined || vaultName === "") {
          alert('AzureKeyVaultSecret: ' + operatorType + '\'s vaultName is empty');
          return;
        }

        objectYaml["spec"]["vault"]["name"] = vaultName;

        // test for vaultObjectName
        var vaultObjectName = operatorProperties.attribute.vaultObjectName;
        if (vaultObjectName === undefined || vaultObjectName === "") {
          alert('AzureKeyVaultSecret: ' + operatorType + '\'s vaultObjectName is empty');
          return;
        }

        objectYaml["spec"]["vault"]["object"]["name"] = vaultObjectName;

        // test for vaultObjectType
        var vaultObjectType = operatorProperties.attribute.vaultObjectType;
        if (vaultObjectType === undefined || vaultObjectType === "") {
          alert('AzureKeyVaultSecret: ' + operatorType + '\'s vaultObjectType is empty');
          return;
        }

        objectYaml["spec"]["vault"]["object"]["type"] = vaultObjectType;

        // test for outputSecretName 
        var outputSecretName = operatorProperties.attribute.outputSecretName;
        if (outputSecretName === undefined || outputSecretName === "") {
          alert('AzureKeyVaultSecret: ' + operatorType + '\'s outputSecretName is empty');
          return;
        }

        objectYaml["spec"]["output"]["secret"]["name"] = outputSecretName;

        // test for outputSecretDataKey
        var outputSecretDataKey = operatorProperties.attribute.outputSecretDataKey;
        if (outputSecretDataKey === undefined || outputSecretDataKey === "") {
          alert('AzureKeyVaultSecret: ' + operatorType + '\'s outputSecretDataKey is empty');
          return;
        }

        objectYaml["spec"]["output"]["secret"]["dataKey"] = outputSecretDataKey;
      } else if (operatorType === "Certificate") {
        // test for certHost
        var certHost = operatorProperties.attribute.certHost;
        if (certHost === undefined || certHost === "") {
          alert('Certificate: ' + operatorType + '\'s certHost is empty');
          return;
        }

        objectYaml["spec"]["dnsNames"].push(certHost);
        console.log(objectYaml["spec"]["acme"])
        objectYaml["spec"]["acme"]["config"][0]["domains"].push(certHost);
      } else if (operatorType === "ClusterIssuer") {
        // test for email
        var email = operatorProperties.attribute.email;
        if (email === undefined || email === "") {
          alert('ClusterIssuer: ' + operatorType + '\'s email is empty');
          return;
        }

        objectYaml["spec"]["acme"]["email"] = email;
      } else if (operatorType === "PersistentVolumeClaim") {
        // test for accessModes
        var accessModes = operatorProperties.attribute.accessModes;
        if (accessModes === undefined || accessModes === "") {
          alert('PVC accessModes empty: ' + operatorType + '\'s accessModes is empty');
          return;
        }

        // test for request 
        var request_storage = operatorProperties.attribute.request_storage;
        if (request_storage === undefined || request_storage === "") {
          alert('PVC request_storage empty: ' + operatorType + '\'s request_storage is empty');
          return;
        }

        objectYaml["metadata"]["name"] = operatorTitle;
        objectYaml["spec"]["storageClassName"] = operatorProperties.storageclass;
        objectYaml["spec"]["accessModes"].push(accessModes);
        objectYaml["spec"]["resources"]["requests"]["storage"] = request_storage;
      } else if (operatorType === "PersistentVolume") {
        // test for accessModes
        var accessModes = operatorProperties.attribute.accessModes;
        if (accessModes === undefined || accessModes === "") {
          alert('PV accessModes empty: ' + operatorType + '\'s accessModes is empty');
          return;
        }

        // test for request 
        var capacity_storage = operatorProperties.attribute.capacity_storage;
        if (capacity_storage === undefined || capacity_storage === "") {
          alert('PV capacity_storage empty: ' + operatorType + '\'s capacity_storage is empty');
          return;
        }

        // test for persistentVolumeReclaimPolicy
        var persistentVolumeReclaimPolicy = operatorProperties.attribute.persistentVolumeReclaimPolicy;
        if (persistentVolumeReclaimPolicy === undefined || persistentVolumeReclaimPolicy === "") {
          alert('PV persistentVolumeReclaimPolicy empty: ' + operatorType + '\'s persistentVolumeReclaimPolicy is empty');
          return;
        }

        // test for hostPath
        var hostPath = operatorProperties.attribute.hostPath;
        if (hostPath === undefined || hostPath === "") {
          alert('PV hostPath empty: ' + operatorType + '\'s hostPath is empty');
          return;
        }

        objectYaml["metadata"]["name"] = operatorTitle;
        objectYaml["spec"]["storageClassName"] = operatorProperties.storageclass;
        objectYaml["spec"]["persistentVolumeReclaimPolicy"] = persistentVolumeReclaimPolicy
        objectYaml["spec"]["accessModes"].push(accessModes);
        objectYaml["spec"]["capacity"]["storage"] = capacity_storage;
        objectYaml["spec"]["hostPath"]["path"] = hostPath;
      }
      template[key].yaml = objectYaml;
    }
    return template;
  }

  // load saved project
  document.getElementById("btnLoad").onclick = function()
  {               
    if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
      alert('The File APIs are not fully supported in this browser.');
      return;
    }   

    input = document.getElementById('import_project_button');
    if (!input) {
      alert("Um, couldn't find the fileinput element.");
    }
    else if (!input.files) {
      alert("This browser doesn't seem to support the `files` property of file inputs.");
    }
    else if (!input.files[0]) {
      alert("Please select a file before clicking 'Load'");               
    }
    else {
      file = input.files[0];
      fr = new FileReader();
      fr.onload = onLoadCallback;
      fr.readAsText(file);
    }
  }  

  // change data value
  function onLoadCallback(e) {
    var allData = JSON.parse(e.target.result);
    $flowchart.flowchart('setData', allData);
  };


  // save
  document.getElementById("save_project_button").onclick = function() {
    var allData = $flowchart.flowchart('getData'); 
    var outputDump = JSON.stringify(allData); 
    var a = document.createElement('a');
    blob = new Blob([outputDump], {type: "octet/stream"});
    console.log(blob)
    url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'project.json';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  // render 
  document.getElementById("render_button").onclick = function() {
    var retTemplate = templateGen();
    if (retTemplate === undefined) {
      return;
    }

    var outputDump = ""
    for (var key in retTemplate) {
      outputDump += jsyaml.dump(retTemplate[key].yaml)
      outputDump += "---\n"
    }
    
    var win = window.open("", "win", "width=600,height=700"); // a window object
    win.document.open("text/html", "replace");
    win.document.write("<pre>" + outputDump + "</pre>");
    win.document.close();
  };

  // download
  document.getElementById("download_button").onclick = function() {
    var retTemplate = templateGen();
    if (retTemplate === undefined) {
      return;
    }
    
    var outputDump = ""
    for (var key in retTemplate) {
      outputDump += jsyaml.dump(retTemplate[key].yaml)
      outputDump += "---\n"
    }
    
    var a = document.createElement('a');
    blob = new Blob([outputDump], {type: "octet/stream"});
    console.log(blob)
    url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'template.yaml';
    a.click();
    window.URL.revokeObjectURL(url);
  };
});
