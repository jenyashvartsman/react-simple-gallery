import "./Sidebar.css";
import type { GalleryDto } from "../dtos/gallery.dto";

interface SidebarProps {
  galleries: GalleryDto[];
  selectedGalleryIndex: number;
  galleryClick: (index: number) => void;
}

const Sidebar = ({
  galleries,
  selectedGalleryIndex,
  galleryClick,
}: SidebarProps) => {
  return (
    <ul className="sidebar">
      {galleries.map((gallery, galleryIndex) => (
        <li
          key={gallery.title}
          className={`sidebar__item ${
            selectedGalleryIndex === galleryIndex ? "sidebar__item--active" : ""
          }`}
          onClick={() => galleryClick(galleryIndex)}
        >
          <h3 className="sidebar__title">{gallery.title}</h3>
          <img
            src={gallery.coverImage.url}
            alt={gallery.title}
            className="sidebar__thumbnail"
          />
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
