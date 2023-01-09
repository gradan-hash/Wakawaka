//temp data
export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },

  {
    fied: "user",
    headerName: "Username",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellwithimg">
          <img className="cellimg" src={params.row.img} alt="avatar" />
          {params.row.firstname}
        </div>
      );
    },
  },

  { field: "email", headerName: "Email", width: 230 },
  { field: "phonenumber", headerName: "phonenumber", width: 230 },

  {
    field: "status",
    headerName: "Status",
    width: 230,
    renderCell: (params) => {
      return (
        <div className={`cellwithstatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    firstname: "cornelius",
    img: "https://images.pexels.com/photos/1549004/pexels-photo-1549004.jpeg?auto=compress&cs=tinysrgb&w=400",
    email: "corne@gmail.com",
    status: "pending",
  },
  {
    id: 2,
    firstname: "ryan",
    img: "https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=400",
    email: "ryan@gmail.com",
    status: "active",
  },
  {
    id: 3,
    firstname: "voke",
    img: "https://images.pexels.com/photos/868113/pexels-photo-868113.jpeg?auto=compress&cs=tinysrgb&w=400",
    status: "pending",
    email: "voke@gmail.com",
  },
  {
    id: 4,
    firstname: "sam",
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=400",
    status: "active",
    email: "sam@gmail.com",
  },
  {
    id: 5,
    firstname: "wycliff",
    img: "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=400",
    status: "active",
    email: "wycliff@gmail.com",
  },
  {
    id: 6,
    firstname: "cheruu",
    img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400",
    status: "active",
    email: "cheruu@gmail.com",
  },
  {
    id: 7,
    firstname: "kibet",
    img: "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=400",
    status: "active",
    email: "kibet@gmail.com",
  },
  {
    id: 8,
    firstname: "marto",
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    status: "pending",
    email: "marto@gmail.com",
  },
  {
    id: 9,
    firstname: "gitau",
    img: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400",
    status: "pending",
    email: "gitau@gmail.com",
  },
  {
    id: 10,
    firstname: "sijui",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
    status: "active",
    email: "sijui@gmail.com",
  },
  {
    id: 11,
    firstname: "makos",
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    status: "pending",
    email: "makos@gmail.com",
  },
];
