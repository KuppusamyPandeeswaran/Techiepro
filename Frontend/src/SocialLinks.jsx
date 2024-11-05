import React from "react";
import profileData from "./profile.json";

export default function SocialLinks() {
  return (
    <>
      {/* {profileData.map((userdata) => (
        <div key={userdata.username}> */}
      <div className="social-links mt-3">
        <aside>
          <div className="p-2 flex flex-col gap-2 bg-slate-50 ">
            <h3 className="text-2xl font-semibold my-2 text-center">Socials</h3>
            <ul class=" py-2 px-3 mt-2">
              <li className="flex gap-8 items-center justify-between my-4 border-b pb-2">
                <div>
                  <ion-icon name="earth-outline" class="w-3 h-3"></ion-icon>
                  Website:
                </div>
                <div>
                  <a href="">Website link</a>
                  {/* <a href="">{userdata.links.website}</a> */}
                </div>
              </li>
              <li className="flex gap-8 items-center justify-between my-4 border-b pb-2">
                <div>
                  <ion-icon name="logo-github" class="w-3 h-3"></ion-icon>
                  Github:
                </div>
                <a href="">Github link</a>
                {/* <a href="">{userdata.links.GitHub}</a> */}
              </li>

              <li className="flex gap-8 items-center justify-between my-4 pb-2">
                <div>
                  <ion-icon name="logo-linkedin" class="w-3 h-3"></ion-icon>
                  LinkedIn:
                </div>
                <a href="">LinkedIn link</a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
      {/* </div>
      ))} */}
    </>
  );
}
