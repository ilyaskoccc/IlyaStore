import React from "react";

const Terms = () => {
  return (
    <div className="flex justify-center py-12 px-4 bg-white">
      <div className="w-full max-w-4xl">
        {/* TERMS TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-2">
            Our Terms &amp; Privacy
          </h2>
          <p className="text-xl text-gray-500">Last Modified: June 29, 2021</p>
        </div>

        {/* DIVIDER LINE */}
        <hr className="border-gray-300 mb-16" />

        {/* TERMS BOX */}
        <div className="space-y-16 text-left mb-20">
          <div className="terms-box">
            <p className="text-lg text-gray-700 mb-6">
              Donec sodales, nibh vel (
              <span className="font-semibold text-gray-900">"Terms"</span>)
              tristique aliquet, nisi libero suscipit diam, sed tempus ante
              nulla purus. Donec dolor magna, a suscipit in magna dignissim,
              porttitor an hendrerit diam. Nunc gravida ultrices faucibus.
              Aliquet lorem purus, quis mollis nisi laoreet at vitae. Mauris
              consequat tortor duis fermentum a massa
            </p>
            <p className="text-lg text-gray-700">
              Sagittis congue augue egestas volutpat egestas magna suscipit
              egestas magna ipsum vitae purus efficitur and ipsum primis in
              cubilia laoreet augue egestas luctus donec diam. Libero curabitur
              dapibus quisque tristique neque blandit tristique justo aliquam.
              Aliquam{" "}
              <a href="#" className="text-sky-500 hover:underline">
                molestie nunc sapien justo
              </a>
              , aliquet non molestie sed, venenatis nec purus. Aliquam eget
              lacinia elit. Vestibulum tincidunt tincidunt massa, et porttitor
              justo suscipit
            </p>
          </div>

          <div className="terms-box">
            <h5 className="text-2xl font-semibold text-gray-900 mb-6">
              Processing of your data
            </h5>
            <p className="text-lg text-gray-700 mb-6">
              Donec sodales, nibh vel tristique aliquet, nisi libero suscipit
              diam, sed tempus ante nulla ut purus. Donec dolor magna aliquet
              suscipit in magna dignissim, porttitor hendrerit. Nunc gravida
              ultrices a felis faucibus. Praesent lorem purus, quis mollis nisi
              laoreet vitae. Mauris nec consequat tortor
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta
              justo. Velna vitae auctor congue magna nihil impedit ligula risus.
              Mauris donec ociis et magnis sapien sagittis sapien sem congue
              tempor gravida and donec enim ipsum porta justo integer velna a
              purus efficitur ipsum primis in cubilia laoreet augue egestas
              luctus donec purus and blandit sodales
            </p>

            <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg">
              <li>
                <span className="font-semibold">Email address</span> euismod
                purus pretium purus pretium ligula rutrum tempor mullam blandit
                tempor sapien and gravida donec ipsum at justo turpis urna
                augue, viverra a augue eget
              </li>
              <li>
                <span className="font-semibold">Payment data</span> vitae auctor
                a congue magna tempor sapien gravida laoreet turpis urna augue,
                viverra a augue eget, dictum tempor diam pulvinar consectetur
                purus efficitur ipsum primis in cubilia laoreet augue donec,
                dictum tempor
              </li>
            </ul>

            <p className="text-lg text-gray-700 mt-6">
              Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta
              justo. Velna vitae auctor congue magna nihil impedit ligula risus.
              Mauris donec ociis et magnis sapien sagittis sapien sem congue
              tempor gravida donec enim ipsum porta justo integer odio velna a
              purus efficitur ipsum primis in cubilia laoreet augue egestas
              luctus donec purus and blandit sodales
            </p>
          </div>

          <div className="terms-box">
            <h5 className="text-2xl font-semibold text-gray-900 mb-6">
              Collection of information
            </h5>
            <p className="text-lg text-gray-700">
              In at mauris vel nisl convallis porta at vitae dui. Nam lacus
              ligula, vulputate mullam molestie bibendum quis, aliquet massa
              elementum. Vestibulum ut sagittis massa lorem fusce cursus est.
              Fusce non nulla vitae massa placerat vulputate vel purus. Aliqum
              blandit tempor undo sapien pulvinar consectetur nibh, vel
              imperdiet dui varius viverra.
            </p>
          </div>

          <div className="terms-box">
            <h5 className="text-2xl font-semibold text-gray-900 mb-6">
              Authorized user accounts and account security
            </h5>
            <p className="text-lg text-gray-700 mb-6">
              Suscipit in magna dignissim, porttitor hendrerit diam. Nunc
              gravida ultrices felis eget faucibus. Praesent aliquet lorem
              purus, quis mollis nisi laoreet vitae.{" "}
              <a href="#" className="text-sky-500 hover:underline">
                Mauris nec consequat tortor.
              </a>{" "}
              Duis fermentum a massa in convallis quisque eu interdum augue.
            </p>
            <p className="text-lg text-gray-700">
              In at mauris vel nisl convallis porta at vitae dui. Nam lacus
              ligula, vulputate mullam molestie bibendum quis, aliquet massa
              elementum. Vestibulum ut sagittis massa lorem fusce cursus est.
              Fusce non nulla vitae massa placerat vulputate vel purus. Aliqum
              blandit tempor undo
            </p>
          </div>

          <div className="terms-box">
            <h5 className="text-2xl font-semibold text-gray-900 mb-6">
              Prohibited conduct and content
            </h5>
            <p className="text-lg text-gray-700 mb-6">
              Sagittis congue augue egestas volutpat egestas magna suscipit
              egestas magna ipsum vitae purus efficitur ipsum primis in cubilia
              laoreet augue egestas luctus donec diam. Curabiturac dapibus
              libero. Quisque eu tristique neque. Phasellus blandit tristique
              justo ut aliquam. Aliquam vitae{" "}
              <a href="#" className="text-sky-500 hover:underline">
                molestie nunc sapien justo
              </a>
              , aliquet non molestie sed, venenatis nec purus. Aliquam eget
              lacinia elit. Vestibulum tincidunt tincidunt massa, et porttitor
              justo.
            </p>

            <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg">
              <li>
                <span className="font-semibold">
                  Quaerat sodales sapien undo euismod purus blandit velna
                </span>{" "}
                vitae auctor a congue magna tempor sapien eget gravida laoreet
                turpis urna augue, viverra a augue eget, dictum tempor diam
                pulvinar consectetur purus efficitur ipsum primis in cubilia
                laoreet augue donec
              </li>
              <li>
                <span className="font-semibold">
                  Nemo ipsam egestas volute turpis dolores
                </span>{" "}
                ut aliquam quaerat sodales sapien congue augue egestas volutpat
                egestas magna suscipit egestas magna ipsum vitae purus efficitur
                ipsum primis in cubilia undo pretium a purus pretium ligula
              </li>
            </ul>
          </div>

          <div className="terms-box">
            <h5 className="text-2xl font-semibold text-gray-900 mb-6">
              Your responsibilities
            </h5>
            <p className="text-lg text-gray-700 mb-6">
              Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta
              justo. Velna vitae auctor congue magna nihil impedit ligula risus.
              Mauris donec ociis et magnis sapien sagittis sapien sem congue
              tempor gravida donec enim ipsum porta justo integer odio velna a
              purus efficitur ipsum primis in cubilia laoreet augue egestas
              luctus donec purus and blandit sodales
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg">
              <li>
                Donec dolor magna, suscipit in magna dignissim, porttitor
                hendrerit diam. Nunc gravida ultrices felis eget faucibus.
                Praesent aliquet tempus, blandit posuere ligula varius congue
                cursus
              </li>
              <li>
                Aliquam varius neque commodo purus vulputate pharetra bibendum
                in ante ornare metus
              </li>
              <li>
                Morbi dui lectus, lobortis sit amet felis nec, suscipit
                imperdiet sapien semper ultrices
              </li>
              <li>
                Nulla tincidunt volutpat tincidunt. Pellentesque habitant morbi
                tristique senectus et netus and famesa malesuada augue suscipit,
                luctus neque purus ipsum neque dolor primis
              </li>
            </ul>
          </div>

          <div className="terms-box">
            <h5 className="text-2xl font-semibold text-gray-900 mb-6">
              Availability of services
            </h5>
            <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg">
              <li>
                <span className="font-semibold">
                  Nemo ipsam egestas volute turpis dolores
                </span>{" "}
                ut aliquam quaerat sodales sapien congue augue egestas volutpat
                egestas magna suscipit egestas magna ipsum vitae purus efficitur
                ipsum primis in cubilia undo pretium a purus pretium ligula
              </li>
              <li>
                <span className="font-semibold">
                  Quaerat sodales sapien undo euismod purus blandit velna
                </span>{" "}
                vitae auctor a congue magna tempor sapien eget gravida laoreet
                turpis urna augue, viverra a augue eget, dictum tempor diam
                pulvinar consectetur purus efficitur ipsum primis in cubilia
                laoreet augue donec
              </li>
              <li>
                <span className="font-semibold">
                  Fringilla risus nec, luctus mauris orci auctor
                </span>{" "}
                euismod purus pretium purus pretium ligula rutrum tempor mullam
                blandit tempor sapien and gravida donec ipsum at justo quis
                vehicula magna luctus tempor. Quisque laoreet turpis urna augue,
                viverra a augue eget, dictum tempor diam. Sed pulvinar
                consectetur and placerat imperdiet dui varius viverra
              </li>
            </ul>
          </div>

          <div className="terms-box">
            <h5 className="text-2xl font-semibold text-gray-900 mb-6">
              Term for storing personal data
            </h5>
            <p className="text-lg text-gray-700 mb-6">
              Donec sodales, nibh vel tristique aliquet, nisi libero suscipit
              diam, sed tempus ante nulla purus. Donec dolor magna, suscipit in
              magna dignissim, porttitor hendrerit diam. Nunc gravida
            </p>
            <p className="text-lg text-gray-700">
              Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta
              justo. Velna vitae auctor and congue magna impedit ligula risus.
              Mauris donec ociis et magnis sapien sagittis sapien sem congue
              tempor undo donec gravida enim ipsum porta justo integer odio
              velna a purus efficitur and ipsum primis cubilia laoreet augue
              egestas luctus donec purus and blandit sodales
            </p>
          </div>

          <div className="terms-box">
            <h5 className="text-2xl font-semibold text-gray-900 mb-6">
              Warranty limitations
            </h5>
            <p className="text-lg text-gray-700 mb-6">
              Ut non mauris libero. Sed consequat posuere nunc, eu porttitor
              neque dignissim donec bibendum a sodales elit blandit. Suspendisse
              at finibus metus. Integer nulla quam, pulvinar fermentum a commodo
              undo pulvinar sed nisi. Sed augue turpis, mollis a vehicula
              ornare, dapibus
            </p>
            <p className="text-lg text-gray-700">
              Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta
              justo. Velna vitae auctor congue magna nihil impedit ligula risus.
              Mauris donec ociis et magnis sapien sagittis sapien sem congue
              tempor gravida an donec enim ipsum porta justo integer odio velna
              a purus efficitur ipsum primis in cubilia laoreet egestas and
              luctus donec purus and blandit sodales
            </p>
          </div>

          <div className="terms-box">
            <h5 className="text-2xl font-semibold text-gray-900 mb-6">
              Notices
            </h5>
            <p className="text-lg text-gray-700 mb-6">
              Maecenas gravida porttitor nunc, quis vehicula magna luctus
              tempor. Quisque laoreet turpis urna augue, viverra a augue eget,
              dictum tempor diam. Sed pulvinar consectetur and placerat
              imperdiet dui varius viverra. Pellentesque ac massa lorem fusce
              cursus aliquet elementum
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg">
              <li>
                <span className="font-semibold">
                  Quaerat sodales sapien undo euismod purus blandit velna
                </span>{" "}
                vitae auctor a congue magna tempor sapien eget gravida laoreet
                turpis urna augue, viverra a augue eget, dictum tempor diam
                pulvinar consectetur purus efficitur ipsum primis in cubilia
                laoreet augue donec
              </li>
              <li>
                <span className="font-semibold">
                  Fringilla risus nec, luctus mauris orci auctor
                </span>{" "}
                euismod purus pretium purus pretium ligula rutrum tempor mullam
                blandit tempor sapien and gravida donec ipsum at justo quis
                vehicula magna luctus tempor. Quisque laoreet turpis urna augue,
                viverra a augue eget, dictum tempor diam. Sed pulvinar
                consectetur and placerat imperdiet dui varius viverra
              </li>
            </ul>
          </div>

          <div className="terms-box">
            <h5 className="text-2xl font-semibold text-gray-900 mb-6">
              Third Party Beneficiary
            </h5>
            <p className="text-lg text-gray-700 mb-6">
              Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta
              justo. Velna vitae auctor congue magna nihil impedit ligula risus.
              Mauris donec ociis et magnis sapien sagittis sapien sem congue
              tempor gravida at donec enim ipsum porta justo integer odio velna
              a purus ipsum primis in cubilia laoreet undo augue egestas luctus
              donec purus and blandit sodales
            </p>
            <p className="text-lg text-gray-700">
              Donec sodales, nibh vel tristique aliquet, nisi libero suscipit
              diam, sed tempus ante nulla purus. Donec dolor suscipit and magna,
              in magna dignissim, porttitor hendrerit nunc gravida ultrices
              felis. Quisque eleifend arcu ac tellus cursus, nec vehicula diam
              tempus. Nam ut sapien et mi congue tincidunt. Phasellus in
              exneque.
            </p>
          </div>

          <div className="terms-box">
            <h5 className="text-2xl font-semibold text-gray-900 mb-6">
              Other Terms
            </h5>
            <p className="text-lg text-gray-700 mb-6">
              Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta
              justo. Velna vitae auctor congue magna nihil impedit ligula risus.
              Mauris donec ociis et magnis sapien sagittis sapien congue tempor
              gravida a donec enim ipsum porta justo integer velna a purus
              efficitur ipsum primis in cubilia laoreet an augue egestas luctus
              donec purus and blandit sodales
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Sagittis congue augue egestas volutpat egestas magna suscipit
              egestas magna ipsum vitae purus efficitur ipsum primis in cubilia
              laoreet augue egestas luctus donec diam. Curabitur ac dapibus
              ibero. Quisque undo tristique neque phasellus blandit non
              tristique justo ut aliquam. Aliquam vitae{" "}
              <a href="#" className="text-sky-500 hover:underline">
                molestie nunc sapien justo
              </a>
              , aliquet molestie sed, venenatis nec purus. Aliquam eget lacinia
              elit. Vestibulum tincidunt tincidunt
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg">
              <li>
                Donec dolor magna, suscipit in magna dignissim, porttitor
                hendrerit diam. Nunc gravida ultrices a faucibus felis. Praesent
                aliquet tempus, blandit posuere ligula varius congue cursus
              </li>
              <li>
                Aliquam varius neque commodo purus vulputate pharetra bibendum
                in ante ornare metus
              </li>
              <li>
                Morbi dui lectus, lobortis sit amet felis nec, suscipit
                imperdiet sapien semper ultrices. Nulla tincidunt purus volutpat
                at tincidunt. Habitant morbi tristique senectus et netus
                malesuada famesa augue suscipit a luctus neque purus ipsum neque
                dolor
              </li>
            </ul>
            <p className="text-lg text-gray-700 mt-6">
              Suscipit in magna dignissim, porttitor hendrerit diam. Nunc
              gravida ultrices felis eget faucibus. Praesent and aliquet lorem
              purus, quis mollis nisi laoreet vitae.{" "}
              <a href="#" className="text-sky-500 hover:underline">
                Mauris nec consequat tortor
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
