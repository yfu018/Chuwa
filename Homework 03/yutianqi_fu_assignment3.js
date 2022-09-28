const tableInfo = {
  tableHeader: ['Student Name', 'Age', 'Phone', 'Address'],
  tableContent: [
    {
      'Student Name': 'John',
      Age: 19,
      Phone: '455 - 983 - 0903',
      Address: '123 Ave, San Francisco, CA, 94011',
    },
    {
      'Student Name': 'Alex',
      Age: 21,
      Phone: '455 - 983 - 0912',
      Address: '456 Rd, San Francisco, CA, 94012',
    },
    {
      'Student Name': 'Josh',
      Age: 22,
      Phone: '455 - 345 - 0912',
      Address: '789 Dr, Newark, CA, 94016',
    },
    {
      'Student Name': 'Matt',
      Age: 23,
      Phone: '321 - 345 - 0912',
      Address: '223 Dr, Sunnyvale, CA, 94016',
    },
  ],
};

const list = ['HTML', 'JavaScript', 'CSS', 'React', 'Redux', 'Java'];

const dropDownList = [
  { value: 'newark', content: 'Newark' },
  { value: 'santaClara', content: 'Santa Clara' },
  { value: 'unionCity', content: 'Union City' },
  { value: 'albany', content: 'Albany' },
  { value: 'dalyCity', content: 'Daly City' },
  { value: 'sanJose', content: 'San Jose' },
];

//generate the table header
const generateTableHeaderHelper = (tableHeader) => {
  const tableRowContainer = document.createElement('tr');
  const tableHeaderNodeArray = tableHeader.map((headTextContent) => {
    const tableHeaderElement = document.createElement('th');
    tableHeaderElement.textContent = headTextContent;
    return tableHeaderElement;
  });
  tableRowContainer.append(...tableHeaderNodeArray);
  return tableRowContainer;
};

//generate the table content
const generateTableContentHelper = (tableContent) => {
  const tableContentNodeArray = tableContent.map((tableRowContent) => {
    const tableRowContainer = document.createElement('tr');
    const tableRowNodeArray = Object.values(tableRowContent).map(
      (tableData) => {
        const tableDateNode = document.createElement('td');
        tableDateNode.textContent = tableData;
        return tableDateNode;
      }
    );
    tableRowContainer.append(...tableRowNodeArray);
    return tableRowContainer;
  });
  return tableContentNodeArray;
};

const generateTable = ({ tableHeader, tableContent }) => {
  const table = document.createElement('table');
  const tableHeaderSection = generateTableHeaderHelper(tableHeader);
  const tableBodySection = generateTableContentHelper(tableContent);
  table.append(tableHeaderSection, ...tableBodySection);
  document.body.appendChild(table);
};

const generateListByType = (type, data) => {
  if (type !== 'ol' && type !== 'ul') {
    return;
  }

  const list = document.createElement(type);
  const listItemNodeArray = data.map((listData) => {
    const listItem = document.createElement('li');
    listItem.textContent = listData;
    return listItem;
  });
  list.append(...listItemNodeArray);
  document.body.append(list);
};

const generateDropDownList = (data) => {
  const dropDownListContainer = document.createElement('select');
  const dropDownListNodeArray = data.map(({ value, content }) => {
    const dropDownListOption = document.createElement('option');
    dropDownListOption.textContent = content;
    dropDownListOption.value = value;
    return dropDownListOption;
  });
  dropDownListContainer.append(...dropDownListNodeArray);
  document.body.append(dropDownListContainer);
};

generateTable(tableInfo);
generateListByType('ol', list);
generateListByType('ul', list);
generateDropDownList(dropDownList);
/*
Question 1
Given the following array and implement the table dynamically
*/

const tableInfo = {
  tableHeader: ['Student Name', 'Age', 'Phone', 'Address'],
  tableContent: [
    {
      'Student Name': 'John',
      Age: 19,
      Phone: '455 - 983 - 0903',
      Address: '123 Ave, San Francisco, CA, 94011',
    },
    {
      'Student Name': 'Alex',
      Age: 21,
      Phone: '455 - 983 - 0912',
      Address: '456 Rd, San Francisco, CA, 94012',
    },
    {
      'Student Name': 'Josh',
      Age: 22,
      Phone: '455 - 345 - 0912',
      Address: '789 Dr, Newark, CA, 94016',
    },
    {
      'Student Name': 'Matt',
      Age: 23,
      Phone: '321 - 345 - 0912',
      Address: '223 Dr, Sunnyvale, CA, 94016',
    },
  ],
};

let table = document.getElementById('q1');
let headerTr = document.createElement('tr');
table.appendChild(headerTr);

for (let head of tableInfo.tableHeader) {
  let headEle = document.createElement('th');
  headEle.textContent = head;
  headerTr.appendChild(headEle);
}

for (let content of tableInfo.tableContent) {
  let tableTr = document.createElement('tr');
  table.appendChild(tableTr);
  let name = document.createElement('td');
  name.textContent = content['Student Name'];
  let age = document.createElement('td');
  age.textContent = content.Age;
  let phone = document.createElement('td');
  phone.textContent = content.Phone;
  let address = document.createElement('td');
  address.textContent = content.Address;
  tableTr.appendChild(name);
  tableTr.appendChild(age);
  tableTr.appendChild(phone);
  tableTr.appendChild(address);
}

/*
  Question 2
  Given the array and generate order list and unordered list dynamically as following:
  */

const list = ['HTML', 'JavaScript', 'CSS', 'React', 'Redux', 'Java'];
let orderList = document.getElementById('q21');
let unorderList = document.getElementById('q22');
for (let ele of list) {
  let oele = document.createElement('li');
  oele.textContent = ele;
  let uele = document.createElement('li');
  uele.textContent = ele;
  orderList.appendChild(oele);
  unorderList.appendChild(uele);
}

/*
  Question 3
  Given a array and implement a dropdown list with the following options dynamically 
  FYI: use 'value' in the object as the value attribute in the option tag when you create the dropdown list
  */

const dropDownList = [
  { value: 'newark', content: 'Newark' },
  { value: 'santaClara', content: 'Santa Clara' },
  { value: 'unionCity', content: 'Union City' },
  { value: 'albany', content: 'Albany' },
  { value: 'dalyCity', content: 'Daly City' },
  { value: 'sanJose', content: 'San Jose' },
];

let dropDownMenu = document.getElementById('q3');
for (let ele of dropDownList) {
  let option = document.createElement('option');
  option.textContent = ele.content;
  option.value = ele.value;
  dropDownMenu.appendChild(option);
}
