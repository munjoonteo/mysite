import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import "../styles/socials.css"

export default function Socials() {
  let sharingURl = "https://1drv.ms/b/s!AgAjGo-4bxIrxXnrZ-W3Z3kjVsD2?e=corKHM"
  let base64value = Buffer.from(sharingURl).toString("base64")
  let resumeLink =
    "https://api.onedrive.com/v1.0/shares/u!" + base64value + "/root/content"
  return (
    <div className="socials">
      <a href={resumeLink}>
        <FontAwesomeIcon icon={faFileAlt} /> Resume
      </a>
      <a href="https://github.com/munjoonteo">
        <FontAwesomeIcon icon={faGithub} /> Github
      </a>
      <a href="https://www.linkedin.com/in/mun-joon-teo-850586195/">
        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
      </a>
    </div>
  )
}