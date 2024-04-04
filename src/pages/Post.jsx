import DocumentTittle from "../utils/documentTitle";
import __Tag from "../components/__Tag";
import EmailSubscribe from "../components/EmailSubscribe";

export default function Post() {
  return (
    <>
    <DocumentTittle title="Post name" />
      <main className="mainComponent2 mt-2">
        <div className="w-full h-[300px] bg-blue-200 rounded-3xl"></div>
      </main>
      <main className="mainComponent relative -top-20 mb-[-5rem]">
        <div className="block md:flex bg-white rounded-xl shadow-lg p-5 gap-5">
          <div className="w-full md:w-4/6">
            {/* category */}
            <div>
              <__Tag name="Football" />
            </div>
            {/* post title */}
            <div className="my-3 font-bold text-2xl">
              NBA Star Giannis Antetokounmpo Launches Foundation to Empower
              Youth Through Basketball
            </div>
            {/* post author, date, views */}
            <div className="flex items-center gap-x-3 font-semibold mt-1">
              <div>UCL NEWS</div>
              <div className="text-gray-500">22 Sept 2022</div>
              <div>.</div>
              <div className="text-gray-500"> 234 views</div>
            </div>
            {/* post content */}
            <div className="text-gray-500 mt-3">
              <p className="mb-1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                vel architecto laboriosam dolor rerum nobis cumque optio est.
                Adipisci magnam id architecto accusantium sunt aliquam aliquid
                quod natus ullam voluptate.
              </p>
              <p className="mb-1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                vel architecto laboriosam dolor rerum nobis cumque optio est.
                Adipisci magnam id architecto accusantium sunt aliquam aliquid
                quod natus ullam voluptate.
              </p>
              <p className="mb-1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                vel architecto laboriosam dolor rerum nobis cumque optio est.
                Adipisci magnam id architecto accusantium sunt aliquam aliquid
                quod natus ullam voluptate.
              </p>
              <p className="mb-1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                vel architecto laboriosam dolor rerum nobis cumque optio est.
                Adipisci magnam id architecto accusantium sunt aliquam aliquid
                quod natus ullam voluptate.
              </p>
              <p className="mb-1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                vel architecto laboriosam dolor rerum nobis cumque optio est.
                Adipisci magnam id architecto accusantium sunt aliquam aliquid
                quod natus ullam voluptate.
              </p>
              <p className="mb-1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                vel architecto laboriosam dolor rerum nobis cumque optio est.
                Adipisci magnam id architecto accusantium sunt aliquam aliquid
                quod natus ullam voluptate.
              </p>
              <p className="mb-1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                vel architecto laboriosam dolor rerum nobis cumque optio est.
                Adipisci magnam id architecto accusantium sunt aliquam aliquid
                quod natus ullam voluptate.
              </p>
              <p className="mb-1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                vel architecto laboriosam dolor rerum nobis cumque optio est.
                Adipisci magnam id architecto accusantium sunt aliquam aliquid
                quod natus ullam voluptate.
              </p>
              <p className="mb-1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                vel architecto laboriosam dolor rerum nobis cumque optio est.
                Adipisci magnam id architecto accusantium sunt aliquam aliquid
                quod natus ullam voluptate.
              </p>
              <p className="mb-1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                vel architecto laboriosam dolor rerum nobis cumque optio est.
                Adipisci magnam id architecto accusantium sunt aliquam aliquid
                quod natus ullam voluptate.
              </p>
              <p className="mb-1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                vel architecto laboriosam dolor rerum nobis cumque optio est.
                Adipisci magnam id architecto accusantium sunt aliquam aliquid
                quod natus ullam voluptate.
              </p>
            </div>
            {/* post tags */}
            <div className="mt-5">
              <div className="font-bold mb-2">Tags:</div>
              <div className="flex gap-2 flex-wrap">
                <__Tag name="Football" />
                <__Tag name="Sports" />
                <__Tag name="Ronaldo" />
              </div>
            </div>
            {/* comments */}
            <div className="mt-5">
              <div className="font-bold mb-2">Comments:</div>
            </div>
          </div>
          <div className="mt-5 md:mt-0 w-full md:w-2/6 border-l-2 h-fit p-5">
           <EmailSubscribe />
          </div>
        </div>
      </main>
    </>
  );
}
