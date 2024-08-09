import { v4 as uuidv4 } from "uuid";

export interface Component {
  _id: string;
  name: string;
  projectName: string;
  code: string;
  isFavorite: boolean;
  createdAt: string;
}

export interface Project {
  _id: string;
  clerkUserId: string;
  name: string;
  icon: React.ReactNode;
  // icon: string;
  createdAt: string;
  components: Component[];
}

export const allProjectsData: Project[] = [
  {
    _id: uuidv4(),
    clerkUserId: "1",
    name: "Forms",
    icon: "DynamicFormIcon",
    createdAt: "2022-01-01T12:00:00.000Z",
    components: [
      {
        _id: uuidv4(),
        name: "Form 1",
        projectName: "Forms",
        code: `
        <div className="p-4 bg-blue-50 rounded-lg w-full">
            <h1 className="text-2xl font-bold text-blue-500">Hello, Isaac Nelson</h1>
            <p className="mt-2 text-gray-600">Edit this code to see live changes</p>
        </div>
    `,
        isFavorite: false,
        createdAt: "2022-01-01T12:00:00.000Z",
      },
      {
        _id: uuidv4(),
        name: "Form 2",
        projectName: "Forms",
        code: `
        <div className="p-4 bg-blue-50 rounded-lg w-full">
            <h1 className="text-2xl font-bold text-blue-500">Hello, Isaac Nelson</h1>
            <p className="mt-2 text-gray-600">Edit this code to see live changes</p>
        </div>
    `,
        isFavorite: true,
        createdAt: "2022-01-01T12:00:00.000Z",
      },
      {
        _id: uuidv4(),
        name: "Form 3",
        projectName: "Forms",
        code: `
        <div className="p-4 bg-blue-50 rounded-lg w-full">
            <h1 className="text-2xl font-bold text-blue-500">Hello, Isaac Nelson</h1>
            <p className="mt-2 text-gray-600">Edit this code to see live changes</p>
        </div>
    `,
        isFavorite: false,
        createdAt: "2022-01-01T12:00:00.000Z",
      },
    ],
  },
  {
    _id: uuidv4(),
    clerkUserId: "1",
    name: "Buttons",
    icon: "KeyboardCommandKeyIcon",
    createdAt: "2022-01-01T12:00:00.000Z",
    components: [
      //   {
      //     _id: uuidv4(),
      //     name: "Button 1",
      //     projectName: "Buttons",
      //     code: `
      //     <div className="p-4 bg-blue-50 rounded-lg w-full">
      //         <h1 className="text-2xl font-bold text-blue-500">Hello, Isaac Nelson</h1>
      //         <p className="mt-2 text-gray-600">Edit this code to see live changes</p>
      //     </div>
      // `,
      //     isFavorite: true,
      //     createdAt: "2022-01-01T12:00:00.000Z",
      //   },
      //   {
      //     _id: uuidv4(),
      //     name: "Button 2",
      //     projectName: "Buttons",
      //     code: `
      //     <div className="p-4 bg-blue-50 rounded-lg w-full">
      //         <h1 className="text-2xl font-bold text-blue-500">Hello, Isaac Nelson</h1>
      //         <p className="mt-2 text-gray-600">Edit this code to see live changes</p>
      //     </div>
      // `,
      //     isFavorite: false,
      //     createdAt: "2022-01-01T12:00:00.000Z",
      //   },
      //   {
      //     _id: uuidv4(),
      //     name: "Button 3",
      //     projectName: "Buttons",
      //     code: `
      //     <div className="p-4 bg-blue-50 rounded-lg w-full">
      //         <h1 className="text-2xl font-bold text-blue-500">Hello, Isaac Nelson</h1>
      //         <p className="mt-2 text-gray-600">Edit this code to see live changes</p>
      //     </div>
      // `,
      //     isFavorite: true,
      //     createdAt: "2022-01-01T12:00:00.000Z",
      //   },
    ],
  },
  {
    _id: uuidv4(),
    clerkUserId: "1",
    name: "Cards",
    icon: "CategoryIcon",
    createdAt: "2022-01-01T12:00:00.000Z",
    components: [
      {
        _id: uuidv4(),
        name: "Card 1",
        projectName: "Cards",
        code: `
        <div className="p-4 bg-blue-50 rounded-lg w-full">
            <h1 className="text-2xl font-bold text-blue-500">Hello, Isaac Nelson</h1>
            <p className="mt-2 text-gray-600">Edit this code to see live changes</p>
        </div>
    `,
        isFavorite: false,
        createdAt: "2022-01-01T12:00:00.000Z",
      },
      {
        _id: uuidv4(),
        name: "Card 2",
        projectName: "Cards",
        code: `
        <div className="p-4 bg-blue-50 rounded-lg w-full">
            <h1 className="text-2xl font-bold text-blue-500">Hello, Isaac Nelson</h1>
            <p className="mt-2 text-gray-600">Edit this code to see live changes</p>
        </div>
    `,
        isFavorite: false,
        createdAt: "2022-01-01T12:00:00.000Z",
      },
      {
        _id: uuidv4(),
        name: "Card 3",
        projectName: "Cards",
        code: `
        <div className="p-4 bg-blue-50 rounded-lg w-full">
            <h1 className="text-2xl font-bold text-blue-500">Hello, Isaac Nelson</h1>
            <p className="mt-2 text-gray-600">Edit this code to see live changes</p>
        </div>
    `,
        isFavorite: false,
        createdAt: "2022-01-01T12:00:00.000Z",
      },
      {
        _id: uuidv4(),
        name: "Card 4",
        projectName: "Cards",
        code: `
        <div className="p-4 bg-blue-50 rounded-lg w-full">
            <h1 className="text-2xl font-bold text-blue-500">Hello, Isaac Nelson</h1>
            <p className="mt-2 text-gray-600">Edit this code to see live changes</p>
        </div>
    `,
        isFavorite: true,
        createdAt: "2022-01-01T12:00:00.000Z",
      },
    ],
  },
];
