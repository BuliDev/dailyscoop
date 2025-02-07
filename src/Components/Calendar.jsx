import React from "react";
import "./Calendar.css";

const Calendar = () => {
  return (
    <div className="calendar">
      <div className="navigate-date">
        <h2 className="month">February,</h2>
        <h2 className="year">2025</h2>
        <div className="buttons">
          <i className="bx bx-chevron-left"></i>
          <i className="bx bx-chevron-right"></i>
        </div>
      </div>
      <div className="weekdays">
        <span>Sun</span>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
      </div>
      <div className="days">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span className="current-day">7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
        <span>11</span>
        <span>12</span>
        <span>13</span>
        <span>14</span>
        <span>15</span>
        <span>16</span>
        <span>17</span>
        <span>18</span>
        <span>19</span>
        <span>20</span>
        <span>21</span>
        <span>22</span>
        <span>23</span>
        <span>24</span>
        <span>25</span>
        <span>26</span>
        <span>27</span>
        <span>28</span>
      </div>
    </div>
  );
};

export default Calendar;
