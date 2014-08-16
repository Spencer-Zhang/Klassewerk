App.WORKSHEETS = [{
  id: 1,
  url: '/http://winterrowd-math.wikispaces.com/file/view/wkst_proportions_pg_1.png',
  input_fields: [{
    x: 50,
    y: 50,
    height: 50,
    width: 50,
    content: "input field text"
  },{
    x: 150,
    y: 50,
    height: 50,
    width: 50,
    content: "second input field"
  }]
}]

App.ENROLLMENTS = [{
  id: 1,
  student: 1,
  classroom: 1
}]

App.ASSIGNMENTS = [{
  id: 1,
  classroom: 1,
  worksheet: 1,
  due_date: new Date('2015'),
  assigned_date: new Date('2015')
},{
  id: 2,
  classroom: 1,
  worksheet: 1,
  due_date: new Date('2015'),
  assigned_date: new Date('2013')
},{
  id: 3
  classroom: 1,
  worksheet: 1,
  due_date: new Date('2013'),
  assigned_date: new Date('2013')
}]

App.CLASSROOMS = [{
  id: 1,
  teacher: 1,
  title: 'English',
  grading_period: '1'
}]

App.GRADING_PERIODS = [{
  id: 1,
  start_date: new Date('2012'),
  end_date: new Date('2016')
}]

App.SCHOOLS = [{
  id: 1,
  code: '1234',
  location: 'Chicago',
  name: 'DBC',
  mascot: 'Salamanders'
}]

App.STUDENTS = [{
  id: 1,
  first_name: 'Joe',
  last_name: 'Joe',
  username: 'Joe',
  school: 1
}]

App.TEACHERS = [{
  id: 1,
  first_name: 'Bill',
  last_name: 'Bill',
  email: 'bill@bill.com',
  school: 1
}]